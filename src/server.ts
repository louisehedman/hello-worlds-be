import "dotenv/config";
import router from "./routes/router";
import express from "express";
import { connectDb } from "./database/connection";
import cookieParser from "cookie-parser";
import { seedPlanets } from "./database/seeder";

const app = express();
const PORT = process.env.PORT || 4000;
const dbURI = process.env.DB_URI;

app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDb(dbURI);

if (process.argv.includes("seed")) {
  console.log("seeding planets...");
  seedPlanets();
}
