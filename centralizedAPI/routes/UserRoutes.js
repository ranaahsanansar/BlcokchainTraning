import express from 'express';
const UserRoutes = express.Router();
import UserController from '../controllers/UserController.js';
import userAuthentication from '../middlewares/AuthMiddleware.js';

UserRoutes.use('/changepass' , userAuthentication);
UserRoutes.use('/loggeduser' , userAuthentication);


// UnAuthorized Routes 

UserRoutes.post('/register' , UserController.userRegistration);
UserRoutes.post('/login' , UserController.userLogin);
UserRoutes.post('/send-reset-password-email' , UserController.sendResetPasswordEmail);
UserRoutes.post('/user-password-forgot/:id/:token' , UserController.forgottenPasswordReset);
UserRoutes.get('/user-verification/:id/:token' , UserController.userVerificationEmail);

// Authenticated Routes 

UserRoutes.post('/changepass' , UserController.changUserPass);
UserRoutes.get('/loggeduser' , UserController.loggedUser);


export default UserRoutes;