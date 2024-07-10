import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req,res,next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username==="" || email ==="" || password==="") {
        next(errorHandler(400,"All fields are required"))
    }
    const hashPassword = bcryptjs.hashSync(password,9)
    const newUser = new User({
        username,
        email,
        password : hashPassword
    });

    try {

        await newUser.save();
        return res.json("Signup Successful");
    }
    catch(error) {
        next(error)
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, 'User not found'));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, 'Invalid password'));
      }
      const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        process.env.JWT_SECRET_KEY
      
      );
  
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
  };
