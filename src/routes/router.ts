import { Router } from "express";
const router = Router();

//import controllers
import { register, login, logout, authorization } from '../controllers/AuthController';
import { getList, createTrip, getTrip } from '../controllers/TripController';

//routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', authorization, logout);
router.get('/get-list/:id', authorization, getList);
router.get('/get-trip/:userId/:tripId', authorization, getTrip);
router.patch('/create-trip/:id', authorization, createTrip);


export default router;