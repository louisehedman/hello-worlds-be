import { Router } from "express";
const router = Router();

//import controllers
import { register, login, logout } from '../controllers/AuthController';
import { createList } from '../controllers/TripController';

//routes
router.post('/register', register );
router.post('/login', login);
router.post('/logout', logout);
router.patch('/create-trip/:id', createList);


export default router;