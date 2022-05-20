import * as fs from "fs";
import Planet from "./models/Planet";
import mongoose from "mongoose";
import { ErrorResponse } from "../utils/errorResponse";

const seedPlanets = async () => {
  const db = mongoose.connection;
  const planets = JSON.parse(
    fs.readFileSync(__dirname + "/planets.json", "utf-8")
  );
  try {
    await db
      .dropCollection("planets")
      .then(() => {
        console.log(`${db.name}.planets collection dropped`);
      })
      .then(() => {
        Planet.insertMany(planets);
      });
    console.log(`${db.name}.planets collection created, documents inserted`);
  } catch (error) {
    return new ErrorResponse(error, 500);
  }
};

export { seedPlanets };
