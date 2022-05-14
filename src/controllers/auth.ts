import { Response, Request } from 'express';
import {IUser, User} from '../models/User'; 
import {ErrorResponse} from '../utils/errorResponse';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'


exports.register= async (req:Request,res:Response,next:any)=>{
    const {username,email,password,isAdmin, profile} = req.body;
    try {
        const user:IUser= await User.create({
            username,
            email,
            password,
            isAdmin,
            profile
        }); 
        user.save().then(() => {
            res.json({ message: "User created"});
        });
    } catch (error:any) {
        next(error);
    }
};

exports.login = async (req:Request,res:Response,next:any)=>{
    const {email,password}=req.body;
    if (!email || !password){
        return next(new ErrorResponse("Please provide a valid email and Password",400))
    };
    try {
        const user:IUser | null = await User.findOne({email}).select("+password");
        if (!user){
            return next(new ErrorResponse("Invalid Credentials",401))
        }
        const isMatch:boolean= await user.matchPassword(password);
        if (!isMatch){
            return next(new ErrorResponse("Invalid Credentials",401))
        } if (user){
            const token = jwt.sign(
            { id: user._id, username: user.username, isAdmin: user.isAdmin }, 'YOUR_SECRET_KEY'
          );
            return res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ message: "User logged in"});
        } else {
            res.json({ message: "Sorry could not login" });
        }  
    } catch (error:any) {
        return next(new ErrorResponse(error.message,500))
    }
}


