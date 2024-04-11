import {User} from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


const register = async (req, res) => {
  
  // check if username already exists
  const userNameExists = await User.findOne({
    username: req.body.username
  });
  if (userNameExists) return res.status(403).json({
    error: "Username already exists"
  });

  // check if email already exists
  const emailExists = await User.findOne({
    email: req.body.email
  });
  if (emailExists) return res.status(403).json({
    error: "Email already exists"
  });

  // create new user if username and email are unique
  const user = new User(req.body);
  await user.save();
  res.status(201).json({
    message: "Signup Successfull, Please Login to continue."
  });

};

const homepage = async (req, res) => {
  res.status(200).json({
    message:"Successful!"
  })
};

const login = async (req, res) => {
  // find the user based on email
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // if no user found 
    if (!user) {
      return res.status(400).json({
        error: "Invalid Credentials",
      });
    }

    // if user is found, authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Invalid email or password",
      });
    }

    // generate a token with user id and jwt secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // persist the token as 'jwt' in cookie with an expiry date
    res.cookie('jwt', token, { expire: new Date() + 9999, httpOnly: true });

    // return the response with user
    const { username } = user;
    return res.json({
      message: "Login Successfull",
      username,
    });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const logout = async (req, res) => {
  // clear the cookie
  res.clearCookie('jwt');

  return res.json({
    message: "Logout Successfull",
  });
};


export {register};
export {homepage};
export {login};
export {logout};