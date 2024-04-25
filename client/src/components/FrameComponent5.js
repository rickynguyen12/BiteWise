import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent5.css";

const FrameComponent5 = () => {
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
          <Button
            className="sign-in7"
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
                placeholder="Username"
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
    </div>
  );
};

export default FrameComponent5;
