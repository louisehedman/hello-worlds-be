import "dotenv/config";
import router from "./routes/router";
import express, { Request, Response } from 'express';
import { connectDb } from "./database/connection";
import cookieParser from 'cookie-parser';
import listEndpoints from 'express-list-endpoints'

const app = express();
const PORT = process.env.PORT || 4000;
const dbURI = process.env.DB_URI;


app.use(express.json());
app.use(cookieParser());
app.use("/", router);
router.get('/', (req: Request, res: Response) => {
    res.send(listEndpoints(app))
})

app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }
);

connectDb(dbURI);


