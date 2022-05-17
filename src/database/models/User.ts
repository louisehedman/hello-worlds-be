import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from "mongoose";


interface UserInterface {
    isModified(arg0: string);
    matchPassword(password: string): boolean | PromiseLike<boolean>;
    resetPasswordToken: string|undefined;
    resetPasswordExpire: string|undefined;
    firstName: string,
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
}

const UserSchema: Schema = new Schema<UserInterface>({
    firstName: {
        type: String,
        uniqe: false,
        required: [true, "Can't be blank"], 
    },
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
    resetPasswordToken: String,
    resetPasswordExpire: String,
});

UserSchema.pre<UserInterface>("save", async function (next: any) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.methods.matchPassword = async function (password:string) {
    return await bcrypt.compare(password,this.password)   
}

const User = mongoose.model<UserInterface>("User", UserSchema);


export default User;