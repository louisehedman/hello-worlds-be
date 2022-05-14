import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    getSignedToken(): string;
    matchPassword(password: string): boolean | PromiseLike<boolean>;
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
    profile: {
        name: String,
        avatar: String,
    }
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        uniqe: true,
        required: [true, "Can't be blank"],
        index: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [8, "Please use minimum of 8 characters"],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "Can't be blank"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please use a valid email address'],
        unique: true,
        index: true
    }, 
    isAdmin: {
        type: Boolean, 
        default: false,
    },
    profile: {
        name: String,
        avatar: String,
    }
});

UserSchema.pre<IUser>("save", async function (next: any) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bycrypt.genSalt(10);
    this.password = bycrypt.hashSync(this.password, 10);
    next();
});

UserSchema.methods.matchPassword= async function (password:string) {
    return await bycrypt.compare(password,this.password)   
}

UserSchema.methods.getSignedToken= function (password:string) {
    return jwt.sign({id:this._id},process.env.JWT_SECRET!,{
        expiresIn:process.env.JWT_EXPIRE
    })   
}

UserSchema.methods.getResetPasswordToken= function () {
    const resetToken= crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken= crypto.
    createHash('sha256')
    .update(resetToken)
    .digest('hex');  
    this.resetPasswordExpire = Date.now() + 10*(60*1000) 
    return resetToken

}

export const User:Model<IUser> = model("User", UserSchema);