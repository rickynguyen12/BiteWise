import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';


const router = express.Router();

// import controller
import {register} from '../controllers/user.js';
import {homepage} from '../controllers/user.js';
import {login} from '../controllers/user.js';
import {logout} from '../controllers/user.js';

// import middlewares
import {userRegisterValidator} from '../middlewares/user.js';

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

router.post('/register', userRegisterValidator, register);
router.post('/login', login);
router.get('/logout', logout);

export default router;