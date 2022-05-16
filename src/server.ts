import "dotenv/config";
import router from "./routes/auth";
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }
);


