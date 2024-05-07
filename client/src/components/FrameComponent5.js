import {
  TextField,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent5.css";
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import IsLoggedInLogic from "./isLoggedIn";
import Cookies from 'js-cookie'; // Import the 'js-cookie' package
import FrameComponent4 from "./FrameComponent4";

const FrameComponent5 = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onLogoContainerClick = () => {
    navigate("/");
  };

  const onNewToBiteWiseClick = () => {
    navigate("/register");
  };
  const onNewToBiteWiseClickB = () => {
    navigate("/register-as-store-owner");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", formData);
      console.log("Login Successful:", response.data);
      // Set the JWT token in the browser's cookies
      document.cookie = Cookies.set('jwt', response.data.jwt);
      setOpenSnackbar(true);
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Login Failed:", error);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8080/logout");
      console.log("Login Successful:", response.data);
      setOpenSnackbar(true);
      setIsLoggedIn(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="logo-area-parent">
      <div className="logo-area">
      <FrameComponent4 />  
      </div>
      <div className="frame-wrapper5">
        <header className="sign-in-container">
          <h3 className="sign-in8">Sign In</h3>
        </header>
      </div>
      <div className="delivery-and-about-us-wrapper">
        <div className="delivery-and-about-us">
          <div className="welcome-to-bitewise-wrapper">
            <h3 className="welcome-to-bitewise">Welcome to BiteWise!</h3>
          </div>
          <form className="frame-form">
            <div className="frame-child9" />
            <div className="inputs-wrapper">
              <TextField
                className="inputs"
                placeholder="Email"
                name = "email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#1ac84b" },
                  "& .MuiInputBase-root": {
                    height: "56px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  },
                  "& .MuiInputBase-input": { color: "#616161" },
                }}
              />
            </div>
            <TextField
              className="frame-child10"
              name = "password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#1ac84b" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                },
                "& .MuiInputBase-input": { color: "#616161" },
                width: "621px",
              }}
            />
            <div className="content-label">
              <div className="new-user-sign-up">
                <div
                  className="new-to-bitewise-container"
                  onClick={onNewToBiteWiseClick}
                >
                  {`New to BiteWise? `}
                  <span className="sign-up-here">Sign Up Here</span>
                </div>
                <div
                  className="new-to-bitewise-container"
                  onClick={onNewToBiteWiseClickB}
                >
                  {`Have a Business? `}
                  <span className="sign-up-here">Sign Up Here</span>
                </div>
                <div className="sign-in-frame">
                  <Button
                    className="sign-in9"
                    disableElevation={true}
                    onClick={handleLogin}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#307651",
                      borderRadius: "10px",
                      "&:hover": { background: "#307651" },
                      height: 49,
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={isLoggedIn ? "Login Succesfull." : "Logout Successful"}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            X
          </IconButton>
        }
      />
    </div>
  );
};

export default FrameComponent5;
