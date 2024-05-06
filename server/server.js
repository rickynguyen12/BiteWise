
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
import { searchMerchants } from './searchFoods.js';



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
  secret: "IAMBATMAN",
  resave: false,
  saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//--------------------DB----------------------//
mongoose.connect("mongodb+srv://jasontobin:3-Zvdwki2hMA!m7@cluster0.cssmcqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB connected"))
.catch(err => console.log(err))

//-------------------Searching-------------------//
const router = express.Router();
router.get('/search-query', async (req, res) => {
  try {
    const { query } = req.query; // Assuming the request body contains a 'query' property

    // Log the input received in the request body
    console.log('Received search query:', query);
    const returnMerchants = await searchMerchants(query)
    // Optionally, you can send a response back to the client
    res.status(200).send(returnMerchants);

    // Perform any additional processing or handle the search query here
  } catch (error) {
    console.error('Error handling search query:', error);
    res.status(500).send('Internal server error');
  }
});
app.use('/', router);
//-------------------ROUTES-------------------//
import userRoutes from './routes/user.js';
app.use("/", userRoutes);

passport.use("google", new GoogleStrategy({
  clientID: "243203716267-8vs54hok705sqmmej3456v41cns8rl3n.apps.googleusercontent.com",
  clientSecret: "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",
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
app.listen(8080 || 8080, function() {
  console.log("Server is running on port 8080")
});
