import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


const router = express.Router();

// import controller
import {register} from '../controllers/merchant.js';
import {homepage} from '../controllers/merchant.js';
import {login} from '../controllers/merchant.js';
import {logout} from '../controllers/merchant.js';

// import middlewares
import {merchantRegisterValidator} from '../middlewares/merchant.js';

// api routes
router.get('/', homepage);

// route for getting credentials from client
router.post('/googleSuccessfullSignIn', (req, res) => {
    console.log(req.body);
    // decode id token and get user info
    const idToken = req.body.credential;
    const decoded = jwt.decode(idToken);
    console.log(decoded);
});

router.post('/register', merchantRegisterValidator, register);
router.post('/login', login);
router.get('/logout', logout);

export default router;