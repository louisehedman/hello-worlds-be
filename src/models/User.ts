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
    role: string;
    profile: {
        name: String,
        avatar: String,
    }
}
