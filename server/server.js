
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
import session from "express-session";
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import cors from 'cors';



// get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// load environment variables
dotenv.config();

//----------------------APP----------------------//
const app = express();

// Enable CORS for all origins
app.use(cors());

//--------------------MIDDLEWARE-------------------//
// handle URL parameter
app.use(urlencoded({extended: true}));
// logger 
app.use(morgan('dev'));
app.use(json());
app.use(cookieParser());
app.use(body());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

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

passport.use("google", new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/auth/google/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
}, async (accessToken, refreshToken, profile, cb) => {
  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);
  console.log("profile", profile);
  return cb(null, profile);
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//-------------------LISTENER-------------------//
app.listen(process.env.PORT || 8080, function() {
  console.log("Server is running on port 8080")
});
