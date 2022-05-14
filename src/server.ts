require('dotenv').config({path:'./config.env'});

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { connectDB } from "./config/db"

const app = express();
const PORT = process.env.PORT || 4000;
//const errorHandler = require('/middleware.error');

connectDB()

app.use(express.json());
app.use("/api/auth", require('./routes/auth'));
//app.use("/api/private", require('./routes/private'));

//app.use(errorHandler);

const server=app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }
);

