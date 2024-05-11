import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const navigate = useNavigate();
  const onSignInClick = () => {
    navigate("/login");
  };

  const onCartClick = () => {
    navigate("/cart");
  };

  const onLogoContainerClick = () => {
    navigate("/");
  };

  return (
    <header className="input-collectors">
      <div className="output-generators">
        <div className="frame-parent2s">
          <div className="frame-parent3s">
            <div className="subtract-wrappers">
              <img
                className="subtract-icons"
                loading="lazy"
                alt=""
                src="/subtract1.svg"
              />
            </div>
            <h2 className="bitewises">BiteWise</h2>
          </div>
          <div className="frame-parent4s">
            <TextField
              className="frame-inners"
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
            <div className="bag-wrappers">
              <div className="bags">
                <img
                  className="vector-icons"
                  alt=""
                  src="/vector-1.svg"
                  onClick={onCartClick}
                />
                <div className="bag-childs" />
              </div>
            </div>
            <Button
              className="sign-ins"
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
          <img
            className="image-1-icons"
            alt=""
            src="/image-1@2x.png"
            onClick={onLogoContainerClick}
          />
        </div>
        <div className="compare-prices-wrappers">
          <h3 className="compare-pricess">{`Compare Prices `}</h3>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;
