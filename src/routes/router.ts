import { Router } from "express";
import cors, { CorsOptions } from "cors";

import { register, login, logout, authorization } from '../controllers/AuthController';
import { getList, createTrip, getTrip } from '../controllers/TripController';
import { getAllPlanets, getPlanet } from '../controllers/PlanetController';
import { getBlogs } from "../controllers/BlogController";

const router = Router();

// Configure cors options allowed origins
const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000", "https://helloworldstraveling.netlify.app"],
};

router.use(cors(corsOptions));

// ROUTES
// Public routes
router.post('/register', register);
router.post('/login', login);

// Planet routes
router.get("/planets", getAllPlanets);
router.get("/planets/:planet", getPlanet);

// Blogs routes
router.get("/blogs", getBlogs);

// Protected routes
router.post('/logout', authorization, logout);
router.get('/get-list/:id', authorization, getList);
router.get('/get-trip/:userId/:tripId', authorization, getTrip);
router.patch('/create-trip/:id', authorization, createTrip);

export default router;