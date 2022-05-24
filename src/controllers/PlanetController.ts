import Planet from "../database/models/Planet";
import { Request, Response } from "express";
import mongoose from "mongoose";

// Get all planets
const getAllPlanets = (req: Request, res: Response) => {
  Planet.find({}, function (err: Error, planets) {
    if (!planets) {
      return res.status(404).json("No planets found");
    }
    if (err) {
      return res.status(500).send(console.error());
    }
    return res.status(200).json({ planets });
  });
};

// Get single planet, planet route parameter must be Capitalized.
const getPlanet = (req: Request, res: Response) => {
  Planet.findOne(
    { name: req.params.planet },
    function (err: Error, planet: mongoose.Document) {
      if (!planet) {
        return res.status(404).json("No planet");
      }
      if (err) {
        return res.status(500).send(console.error());
      }
      return res.status(200).json({ planet });
    }
  );
};

export { getAllPlanets, getPlanet };
