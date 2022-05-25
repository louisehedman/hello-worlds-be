import { Router } from "express";
import cors, { CorsOptions } from "cors";

import { register, login, logout, authorization } from '../controllers/AuthController';
import { getList, createTrip, getTrip, editTrip, deleteTrip } from '../controllers/TripController';
import { getAllPlanets, getPlanet } from '../controllers/PlanetController';

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

// Protected routes
router.post('/logout', authorization, logout);
router.get('/get-list/:id', authorization, getList);
router.get('/get-trip/:userId/:tripId', authorization, getTrip);
router.patch('/create-trip/:id', authorization, createTrip);
router.patch('/edit-trip/:userId/:tripId', authorization, editTrip);
router.patch('/delete-trip/:userId/:tripId', authorization, deleteTrip);

export default router;