import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/User.model.js";

export const register = async (req , res)=>{
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ message: "Please provide all the required fields" });
    }

    const checkEmail = await User.findOne({email});
    if(checkEmail){
        return res.status(400).json({message:"Email or password are not valid"});
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = new User({
        email,
        password: hashPassword
    });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET
    );

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      token
    });
};

export const login = async (req , res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "Please provide all the required fields" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.status(200).json({ token });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
