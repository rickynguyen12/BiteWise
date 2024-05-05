import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Snackbar,
  Button,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./FrameComponent4.css";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const FrameComponent4 = () => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) return; // Skip if already logged in
    const jwt = Cookies.get('jwt');
    // validate jwt cookie and expiry
    jwt && axios.post("http://localhost:8080/validate", { jwt })
      .then(response => {
        console.log("JWT Valid:", response.data); 
        setIsLoggedIn(true); // Update isLoggedIn state to true
      })
      .catch(error => {
        console.error("JWT Invalid:", error);
        setIsLoggedIn(false); // Update isLoggedIn state to false
        // Cookies.remove('jwt'); // Remove jwt cookie if needed
      });
  }, [isLoggedIn]); // Add isLoggedIn to dependency array
  
  const onSignInClick = () => {
    navigate("/login");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onLogoutClick = async () => {
    try {
      const response = await axios.get("http://localhost:8080/logout");
      console.log("Login Successful:", response.data);
      setOpenSnackbar(true);
      setIsLoggedIn(false); // Update isLoggedIn state to false
      Cookies.remove('jwt'); // Remove jwt cookie
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <header className="condition-branch-wrapper">
      <div className="condition-branch">
        <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
        <div className="frame-parent2">
          <TextField
            className="frame-inner"
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
          <div className="bag2">
            <Link to="/cart">
              <img className="vector-icon1" alt="" src="/bag.png" />
            </Link>
          </div>
          <div className="sign-in4-container">
            {isLoggedIn ? ( // Conditional rendering based on isLoggedIn state
              <Button
                className="sign-in4"
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
                onClick={onLogoutClick} // Call onLogoutClick function for logout
              >
                Logout
              </Button>
            ) : (
              <Button
                className="sign-in4"
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
                onClick={onSignInClick}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
        <img
          className="image-1-icon"
          alt=""
          src="/image-1@2x.png"
        />
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
    </header>
  );
};

export default FrameComponent4;
