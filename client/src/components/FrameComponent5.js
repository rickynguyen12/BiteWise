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

  // const onLogoContainerClick = () => {
  //   navigate("/");
  // };

  const onAlreadyHaveAnClick = () => {
    navigate("/login");
  };

  return (
    <div className="logo-area-parent">
      <div className="logo-area">
        <div className="logo-container">
          <div className="logo1" onClick={onLogoContainerClick}>
            <h2 className="bitewise2">BiteWise</h2>
            <img
              className="subtract-icon4"
              loading="lazy"
              alt=""
              src="/subtract1.svg"
            />
          </div>
        </div>
        <div className="frame-parent19">
          <TextField
            className="frame-child8"
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
          <div className="bag-bag">
            <div className="bag3">
              <img className="vector-icon6" alt="" src="/vector-1.svg" />
              <div className="bag-inner" />
            </div>
          </div>
          <IsLoggedInLogic IsLoggedIn={isLoggedIn} />
        </div>
        <img
          className="image-1-icon3"
          alt=""
          src="/image-1@2x.png"
          onClick={onLogoContainerClick}
        />
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
        message={isLoggedIn ? "Login Succesfull. Redirecting to Homepage..." : "Logout Successful. Redirecting to Login"}
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
