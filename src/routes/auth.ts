import express from 'express';
const router= express.Router();

//import controllers
const {register, login, forgotPassword, resetPassword, logout}=require('../controllers/auth');

//routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resetToken').post(resetPassword);
router.route('/logout').post(logout);


module.exports =router;