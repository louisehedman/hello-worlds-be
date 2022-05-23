import { Router } from "express";
const router = Router();

//import controllers
import { register, login, logout } from '../controllers/AuthController';
import { getList, createTrip } from '../controllers/TripController';

//routes
router.post('/register', register );
router.post('/login', login);
router.post('/logout', logout);
router.get('/get-list/:id', getList);
router.patch('/create-trip/:id', createTrip);


export default router;