import {
  TextField,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import Footer from '../components/Footer';
import GoogleSignIn from '../pages/googleSignIn';
import "./Register.css";
import Cookies from 'js-cookie';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbars
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('jwt'));
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSignInSuccess =  (response) => {
    axios.post("http://localhost:8080/googleSuccessfullSignIn", response).then(responseFromBackend => {
      console.log("Login Successful:", responseFromBackend);
      // Set the JWT token in the browser's cookies
      document.cookie = Cookies.set('jwt', responseFromBackend.data.jwt);
      setOpenSnackbar(true); // Open Snackbar on successful registration
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }).catch(error => {
      console.error("Signup Failed:", error);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", formData);
      console.log("Signup Successful:", response.data);
      setOpenSnackbar(true); // Open Snackbar on successful registration
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after a delay
      }, 2000);
    } catch (error) {
      console.error("Signup Failed:", error);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    }
  };

  const onLogoContainerClick = () => {
    navigate("/");
  };

  const onAlreadyHaveAnClick = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <section className="register-inner">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="logo-wrapper">
              <div className="logo">
                <h2 className="bitewise">BiteWise</h2>
                <img
                  className="subtract-icon"
                  loading="lazy"
                  alt=""
                  src="/subtract1.svg"
                />
              </div>
            </div>
            <div className="first-name-field">
              <TextField
                className="last-name-field"
                placeholder="Enter item or restaurant you are looking for"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="19px" height="19px" src="/vector.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#808080" },
                  "& .MuiInputBase-root": {
                    height: "49px",
                    backgroundColor: "#fff",
                    paddingRight: "25px",
                    borderRadius: "10px",
                  },
                  "& .MuiInputBase-input": { color: "#808080" },
                }}
              />
              <div className="sign-in-instance">
                <div className="bag">
                  <img
                    className="calorie-info-icon"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="delivery-info" />
                </div>
              </div>
              <div className="sign-in-button" onClick={onAlreadyHaveAnClick}>
                <Button
                  className="sign-in"
                  disableElevation={true}
                  variant="contained"

                  sx={{
                    textTransform: "none",
                    color: "#fdfbfa",
                    fontSize: "14",
                    background: "#202020",
                    borderRadius: "10px",
                    "&:hover": { background: "#202020" },
                    width: 96,
                    height: 49,
                  }}
                >
                  Sign In
                </Button>
              </div>
            </div>
            <img
              className="image-1-icon"
              alt=""
              src="/image-1@2x.png"
              onClick={onLogoContainerClick}
            />
          </div>
          <div className="first-parent">
            <header className="register-wrapper">
              <h3 className="register1">Register</h3>
            </header>
            <div className="phone-number-label">
              <form className="email-label2" onSubmit={handleSubmit}>
                <div className="email-label-child" />
                <div className="password-label">
                  <div className="confirm-password-label">
                    <h3 className="create-your-account">Create Your Account</h3>
                  </div>
                  <div className="register-button">
                    <div className="first-name-parent">
                      <TextField
                        className="first-name"
                        name="firstname"
                        value={formData.firstname}
                        placeholder="First Name"
                        required
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "54px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                      <TextField
                        className="last-name"
                        name="lastname"
                        value={formData.lastname}
                        required
                        placeholder="Last Name"
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "54px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                    </div>
                    <TextField
                      className="phone-number"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#1ac84b" },
                        "& .MuiInputBase-root": {
                          height: "54px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        },
                        "& .MuiInputBase-input": { color: "#808080" },
                      }}
                    />
                    <div className="phone-number-wrapper">
                      <TextField
                        className="phone-number1"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        required
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "54px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                    </div>
                    <div className="phone-number-container">
                      <TextField
                        className="phone-number2"
                        name="username"
                        value={formData.username}
                        placeholder="Username"
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "54px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                    </div>
                    <TextField
                      className="phone-number3"
                      name="password"
                      value={formData.password}
                      placeholder="Password"
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#1ac84b" },
                        "& .MuiInputBase-root": {
                          height: "54px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                        },
                        "& .MuiInputBase-input": { color: "#808080" },
                      }}
                    />
                    <div
                      className="already-have-an-container"
                      onClick={onAlreadyHaveAnClick}
                    >
                      {`Already have an account? `}
                      <span className="sign-in-here">Sign In Here</span>
                    </div>
                  </div>
                </div>
                <div className="sign-in-parent">
                  <div /*onClick = {onLogoContainerClick}*/>
                    <Button
                      type="submit"
                      className="sign-in1"
                      disableElevation={true}
                      variant="contained"

                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#307651",
                        borderRadius: "10px",
                        "&:hover": { background: "#307651" },
                        width: 103,
                        height: 49,
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
                <div className="google-sign-in">
                  <GoogleSignIn onGoogleSignInSuccess={handleSignInSuccess} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer propHeight="20.9px" propHeight1="24px" />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Registration successful!"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            X
          </IconButton>
        }
      />
    </div>
  );
};

export default Register;
