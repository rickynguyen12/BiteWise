import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <section className="group-section">
      <div className="frame-child3" />
      <div className="search-by-wrapper">
        <h3 className="search-by">Search by</h3>
      </div>
      <div className="component-7-wrapper">
        <div className="component-7">
          <h3 className="restaurant">Restaurant</h3>
          <div className="component-7-inner">
            <div className="error-handler-wrapper">
              <img className="error-handler-icon" alt="" src="/vector-14.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="event-trigger">
        <TextField
          className="function-library"
          placeholder="Enter item or restaurant you are looking for"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#fff" },
            "& .MuiInputBase-root": {
              height: "49px",
              borderRadius: "10px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "rgba(255, 255, 255, 0.5)" },
          }}
        />
      </div>
      <Button
        className="sign-in6"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fdfbfa",
          fontSize: "14",
          background: "#202020",
          borderRadius: "10px",
          "&:hover": { background: "#202020" },
          width: 132,
          height: 49,
        }}
      >
        Search Now
      </Button>
    </section>
  );
};

export default GroupComponent;
