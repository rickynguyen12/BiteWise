import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

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
              <form className="email-label">
                <div className="email-label-child" />
                <div className="password-label">
                  <div className="confirm-password-label">
                    <h3 className="create-your-account">Create Your Account</h3>
                  </div>
                  <div className="register-button">
                    <div className="first-name-parent">
                      <TextField
                        className="first-name"
                        placeholder="First Name"
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
                        placeholder="Last Name"
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
                        placeholder="Username"
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
                      placeholder="Password"
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
                  <Button
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
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default Register;
