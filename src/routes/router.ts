import { Router } from "express";
const router = Router();

//import controllers
import { register, login, logout } from '../controllers/AuthController'

//routes
router.post('/register', register );
router.post('/login', login);
router.post('/logout', logout);


export default router;