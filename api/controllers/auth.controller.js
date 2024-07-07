import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req,res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username==="" || email ==="" || password==="") {
        return res.status(400).json({message : "All fields are required"})
    }
    const hashPassword = bcryptjs.hashSync(password,9)
    const newUser = new User({
        username,
        email,
        password : hashPassword
    });

    try {

        await newUser.save();
        return res.json({message:"user ctreated successfully"});
    }
    catch(error) {
        return res.status(500).json({message:error.message})
    }
}
export default signup