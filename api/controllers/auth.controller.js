import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";


const signup = async (req,res,next) => {
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
export default signup