import express from 'express';

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
router.post('/register', userRegisterValidator, register);
router.post('/login', login);
router.get('/logout', logout);

export default router;