import express from 'express';
import passport from 'passport';

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

// sign in with google
router.get('/auth/google/authorize', passport.authenticate('google', 
{ scope: ['profile', 'email'] }));

router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
}));

router.get('/auth/google', passport.authenticate('google',{
    successRedirect: '/',
    failureRedirect: '/login',
}));

router.post('/register', userRegisterValidator, register);
router.post('/login', login);
router.get('/logout', logout);

export default router;