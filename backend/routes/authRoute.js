import express from 'express';
import {registerController, loginController, testController
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from '../middlewares/authmiddleware.js'; 

const router = express.Router();

// Register routes
router.post('/register', registerController)

// Login
router.post('/login', loginController)


// testing routes
router.get('/test', requireSignIn, isAdmin, testController)



export default router


