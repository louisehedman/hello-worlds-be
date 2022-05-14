require('dotenv').config({path:'./config.env'});

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { connectDB } from "./config/db"

const app = express();
const PORT = process.env.PORT || 4000;
import './utils/errorResponse';

connectDB()

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", require('./routes/auth'));

const server=app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }
);

process.on("unhandledRejection",(error,promise)=>{
    console.log(`Logged Error: ${error}`);
    server.close(()=>process.exit(1))

})

