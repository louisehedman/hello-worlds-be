import { Router } from "express";
import { register, login, logout } from "../controllers/AuthController";
import { getAllPlanets, getPlanet } from "../controllers/PlanetController";
const router = Router();

// User routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Planet routes
router.get("/planets", getAllPlanets);
router.get("/planets/:planet", getPlanet);

export default router;
