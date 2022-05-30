import { Router } from "express";
import cors, { CorsOptions } from "cors";

import { register, login, logout } from '../controllers/AuthController';
import { getList, createTrip, getTrip, editTrip } from '../controllers/TripController';
import { getAllPlanets, getPlanet } from '../controllers/PlanetController';
import { getUser } from '../controllers/UserController';

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
router.get('/planets', getAllPlanets);
router.get('/planets/:planet', getPlanet);

// Protected routes
router.post('/logout', logout);
router.get('/user/:id', getUser);
router.get('/get-list/:id', getList);
router.get('/get-trip/:userId/:tripId', getTrip);
router.patch('/create-trip/:id', createTrip);
router.patch('/edit-trip/:userId/:tripId', editTrip);

export default router;