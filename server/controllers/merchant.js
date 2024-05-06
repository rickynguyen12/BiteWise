import Merchant from '../models/merchant.js'
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  try {
    // Check if username already exists
    const userNameExists = await Merchant.findOne({
      username: req.body.username
    });
    if (userNameExists) {
      return res.status(403).json({
        error: "Username already exists"
      });
    }

    // Check if email already exists
    const emailExists = await Merchant.findOne({
      email: req.body.email
    });
    if (emailExists) {
      return res.status(403).json({
        error: "Email already exists"
      });
    }

    // Create new merchant
    const merchant = new Merchant(req.body);
    await merchant.save();
    res.status(201).json({
      message: "Signup Successful, Please Login to continue."
    });
  } catch (error) {
    console.error("Error occurred during merchant registration:", error);
    res.status(500).json({
      error: "An unexpected error occurred during registration"
    });
  }
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
    const { username } = merchant;
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

  return res.status(200).json({
    message: "Logout Successfull",
  });
};


const updateMerchant = async (req, res) => {
  const { restaurant_id } = req.params;
  const updates = req.body;

  try {
    const updatedMerchant = await Merchant.findOneAndUpdate({ restaurant_id }, updates, { new: true });
    if (!updatedMerchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }
    res.json({ message: 'Merchant updated successfully', updatedMerchant });
  } catch (error) {
    res.status(500).json({ message: 'Could not update merchant information' });
  }
};


export {register,login,homepage,logout,updateMerchant};