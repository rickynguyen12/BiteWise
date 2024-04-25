import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onSignInClick = () => {
    navigate("/login");
  };

  const onLogoContainerClick = () => {
    navigate("/");
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
          </div>
        </div>
        <img
          className="image-1-icon"
          alt=""
          src="/image-1@2x.png"
          onClick={onLogoContainerClick}
        />
      </div>
    </header>
  );
};

export default FrameComponent4;
