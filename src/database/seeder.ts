import * as fs from "fs";
import Planet from "./models/Planet";
import mongoose from "mongoose";

const seedPlanets = async () => {
  const db = mongoose.connection;
  const planets = JSON.parse(
    fs.readFileSync(__dirname + "/planets.json", "utf-8")
  );
  try {
    await db
      .dropCollection("planets")
      .then(() => {
        console.log(`${db.name}.planets collention dropped`);
      })
      .then(() => {
        Planet.insertMany(planets);
      });
    console.log(`${db.name}.planets collection created, documents inserted`);
  } catch (error) {
    console.log(error);
  }
};

export { seedPlanets };
