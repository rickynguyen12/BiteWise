import express from 'express';

const router = express.Router();

// import controller
import {register} from '../controllers/user.js';
import {homepage} from '../controllers/user.js';

// import middlewares
import {userRegisterValidator} from '../middlewares/user.js';

// api routes
router.get('/', homepage);
router.post('/register', userRegisterValidator, register);

export default router;