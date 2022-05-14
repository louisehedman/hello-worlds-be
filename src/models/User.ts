import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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