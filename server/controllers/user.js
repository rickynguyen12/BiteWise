import {User} from '../models/user.js';

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

export {register};