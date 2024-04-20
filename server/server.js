import express from 'express';
// import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { body, validationResult } from 'express-validator';
import {json, urlencoded} from 'express';


// get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// load environment variables
dotenv.config();

//----------------------APP----------------------//
const app = express();

//--------------------MIDDLEWARE-------------------//
// handle URL parameter
app.use(urlencoded({extended: true}));
// logger 
app.use(morgan('dev'));
app.use(json());
app.use(cookieParser());
app.use(body());


//--------------------DB----------------------//
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB connected"))
.catch(err => console.log(err))

//-------------------ROUTES-------------------//
import userRoutes from './routes/user.js';
app.use("/", userRoutes);

import menuRoutes from './routes/menu.js';
app.use("/menu", menuRoutes);


//-------------------LISTENER-------------------//
app.listen(process.env.PORT || 8080, function() {
  console.log("Server is running on port 8080")
});
