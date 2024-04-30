import {Merchant} from '../models/merchant.js';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {

  // Business Name, Adress could be duplicates
  // Email, and business phone number must be individual

  // check if email already exists
  const emailExists = await Merchant.findOne({
    email: req.body.email
  });
  if (emailExists) return res.status(403).json({
    error: "Email already exists"
  });

  const businessPhoneExists = await Merchant.findOne({
    phone: req.body.businessPhone
  })
  if(businessPhoneExists) return res.status(403).json({
    error: "Business Phone Number Already Exists"
  })

  // create new user if username and email are unique
  const merchant = new Merchant(req.body);
  await merchant.save();
  res.status(201).json({
    message: "Signup Successfull, Please Login to continue.",
    redirect: "/login"
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
    const merchant = await Merchant.findOne({ email });

    // if no user found 
    if (!merchant) {
      return res.status(400).json({
        error: "Invalid Credentials",
      });
    }

    // if user is found, authenticate
    if (!merchant.authenticate(password)) {
      return res.status(400).json({
        error: "Invalid email or password",
      });
    }

    // generate a token with user id and jwt secret
    const token = jwt.sign({ _id: merchant._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // persist the token as 'jwt' in cookie with an expiry date
    res.cookie('jwt', token, { expire: new Date() + 9999, httpOnly: true });

    // return the response with user
    const { email } = merchant;
    return res.json({
      message: "Login Successfull",
      email,
    });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie('jwt');
  res.json({
    message: "Logout Successfull"
  });
};

export {register};
export {homepage};
export {login};
export {logout};