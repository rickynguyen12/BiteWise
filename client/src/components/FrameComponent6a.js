import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./FrameComponent6.css";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/lottie-player";

const FrameComponent6a = ({
  name,
  circleImage,
  distance,
  rating,
  price,
  features,
  icon,
  deliveryService,
  deliveryFee,
  estimatedTime,
  numOfDeals,
}) => {
  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/in-app-checkout");
  };
  return (
    <div className="rectangle-parents">
      <div className="frame-childs-redirect" />
      <div className="spinners">
        <div className="progress-circles">
          <div className="weather-displays">
            <div className="form-submits">
              <img className="tree-structure-icons" alt="" src={circleImage} />
            </div>
            <div className="toggle-switchs">
              <h3 className="david-and-emilyss">{name}</h3>
              <div className="card-stacks">
                <div className="stepper-circles">
                  <img className="stepper-circle-childs" alt="" src={rating} />
                  <img className="stepper-circle-items" alt="" src={price} />
                </div>
                <div className="mis">{distance}</div>
              </div>
            </div>
          </div>
          <div className="progress-circle-inners">
            <div className="image-manipulation-parents">
              {features.map((feature, index) => (
                <div key={index} className={`image-manipulation${index + 1}s`}>
                  <div className="">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="frame-containers">
        {/* <div className="vector-wrappers">
          <img className="frame-items" alt="" src="/line-5.png" />
        </div> */}
        <div className="frame-wrapperss">
          <div className="frame-divs-redirect">
            <div className="group-parents-uber">
              <div className="uber-eats-parents2">
                <h1 className="uber-eatss">{deliveryService}</h1>
                <div className="best-deal-wrappers">
                  <h3 className="best-deals">Best Deal</h3>
                </div>
              </div>
              <img className="group-icons-redirect" alt="" src={icon} />
            </div>
            <div className="frame-wrapper1s">
              <div className="frame-parent1s">
                <div className="data-reader-parents">
                  <div className="data-readers">{deliveryFee}</div>
                  <div className="est-fees">Est. Fee</div>
                </div>
                <div className="min-parents">
                  <div className="mins">{estimatedTime}</div>
                  <div className="est-times">Est. Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper2s">
          <div className="data-comparer-parents">
            <Button
              className="data-comparers"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#3b9566",
                borderRadius: "10px",
                width: "200px",
                "&:hover": { background: "#3b9566" },
                height: 43,
              }}
              onClick={navigateCheckout}
            >
              Place Order
            </Button>
            <Link to="/view-all-deals" className="view-all-deals-link">
              <div className="view-all-deals-button2">
                <h2 className="view-all-dealss">
                  View All Deals ({numOfDeals})
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6a;
