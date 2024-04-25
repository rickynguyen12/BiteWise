import { Button } from "@mui/material";
import "./FrameComponent6.css";

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
  return (
    <div className="rectangle-parents">
      <div className="frame-childs" />
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
        <div className="vector-wrappers">
          <img className="frame-items" alt="" src="/line-5.svg" />
        </div>
        <div className="frame-wrappers">
          <div className="frame-divs">
            <div className="group-parents">
              <img className="group-icons" alt="" src={icon} />
              <div className="uber-eats-parents">
                <h1 className="uber-eatss">{deliveryService}</h1>
                <div className="best-deal-wrappers">
                  <h3 className="best-deals">Best Deal</h3>
                </div>
              </div>
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
            >
              Place Order
            </Button>
            <div className="view-all-deals-5-wrappers">
              <div className="view-all-dealss">
                View All Deals ({numOfDeals})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6a;
