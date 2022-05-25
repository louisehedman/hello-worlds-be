import { Router } from "express";
import cors, { CorsOptions } from "cors";
import { register, login, logout } from "../controllers/AuthController";
import { getAllPlanets, getPlanet } from "../controllers/PlanetController";
const router = Router();

// Configure cors options allowed origins
const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000", "https://helloworldstraveling.netlify.app"],
};

router.use(cors(corsOptions));

// User routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Planet routes
router.get("/planets", getAllPlanets);
router.get("/planets/:planet", getPlanet);

export default router;
