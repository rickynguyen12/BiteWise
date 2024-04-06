import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <div className="group-parent1">
      <div className="frame-wrapper1">
        <div className="say-goodbye-to-overpaying-for-wrapper">
          <div className="say-goodbye-to-container">
            <p className="say-goodbye-to">Say goodbye to</p>
            <p className="overpaying-for">overpaying for your</p>
            <p className="say-goodbye-to">{`favorite meals `}</p>
          </div>
        </div>
      </div>
      <div className="discover-the-tastiest">
        Discover the tastiest deals with BiteWise! Let us do the legwork - from
        DoorDash to Uber Eats, we compare rates so you can savor every bite
        without breaking the bank. Join BiteWise today and feast smarter!
      </div>
      <div className="frame-parent8">
        <div className="enter-an-item-or-restaurant-wrapper">
          <div className="say-goodbye-to-container">
            Enter an item or restaurant
          </div>
        </div>
        <div className="sign-in2">
          <div className="get-started2">Get Started</div>
        </div>
      </div>
      <div className="find-meals-near-your-area-parent">
        <div className="say-goodbye-to-container">
          Find meals near your area
        </div>
        <div className="san-jose-parent">
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            San Jose
          </Button>
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Seattle
          </Button>
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Los Angeles
          </Button>
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Atlanta
          </Button>
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Phoenix
          </Button>
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            New York
          </Button>
          <Button
            className="san-jose"
            disableElevation={true}
            color="success"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            and more!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
