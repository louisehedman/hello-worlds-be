import "dotenv/config";
import router from "./routes/router";
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import listEndpoints from 'express-list-endpoints';

import { seedPlanets } from "./database/seeder";
import { connectDb } from "./database/connection";

const app = express();
const PORT = process.env.PORT || 4000;
const dbURI = process.env.DB_URI;

app.use(express.json());
app.use(cookieParser());
app.use("/", router);
router.get('/', (req: Request, res: Response) => {
    res.send(listEndpoints(app))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDb(dbURI);

if (process.argv.includes("seed")) {
  console.log("seeding planets...");
  seedPlanets();
}
