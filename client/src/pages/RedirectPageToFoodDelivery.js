import { Button } from "@mui/material";
import FrameComponent7 from "../components/FrameComponent7";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent6 from "../components/FrameComponent6";
import "./RedirectPageToFoodDelivery.css";

const RedirectPageToFoodDelivery = () => {
  return (
    <div className="redirect-page-to-food-deliverys">
      <FrameComponent7 />
      <section className="frame-parents">
        <div className="frame-groups">
          <GroupComponent2 />
          <FrameComponent6 />
        </div>
        <div className="rectangle-parents">
          <div className="frame-childs" />
          <div className="spinners">
            <div className="progress-circles">
              <div className="weather-displays">
                <div className="form-submits">
                  <img
                    className="tree-structure-icons"
                    alt=""
                    src="/rectangle-26@2x.png"
                  />
                </div>
                <div className="toggle-switchs">
                  <h3 className="david-and-emilyss">
                    David and Emily’s Patisserie
                  </h3>
                  <div className="card-stacks">
                    <div className="stepper-circles">
                      <img
                        className="stepper-circle-childs"
                        alt=""
                        src="/group-98.svg"
                      />
                      <img
                        className="stepper-circle-items"
                        alt=""
                        src="/group-95.svg"
                      />
                    </div>
                    <div className="mis">2.04 mi</div>
                  </div>
                </div>
              </div>
              <div className="progress-circle-inners">
                <div className="image-manipulation-parents">
                  <div className="image-manipulations">
                    <div className="frenchs">French</div>
                  </div>
                  <div className="image-manipulation1s">
                    <div className="bakerys">Bakery</div>
                  </div>
                  <div className="image-manipulation2s">
                    <div className="good-for-breakfasts">Good for Breakfast</div>
                  </div>
                  <div className="image-manipulation3s">
                    <div className="local-eatss">Local Eats</div>
                  </div>
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
                  <img className="group-icons" alt="" src="/group1.svg" />
                  <div className="uber-eats-parents">
                    <h1 className="uber-eatss">Uber Eats</h1>
                    <div className="best-deal-wrappers">
                      <h3 className="best-deals">Best Deal</h3>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper1s">
                  <div className="frame-parent1s">
                    <div className="data-reader-parents">
                      <div className="data-readers">$0.49</div>
                      <div className="est-fees">Est. Fee</div>
                    </div>
                    <div className="min-parents">
                      <div className="mins">35 min</div>
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
                    "&:hover": { background: "#3b9566" },
                    height: 43,
                  }}
                >
                  Place Order
                </Button>
                <div className="view-all-deals-5-wrappers">
                  <div className="view-all-dealss">View All Deals (5)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="view-more-button-wrappers">
        <h2 className="view-more-buttons">View More</h2>
      </div>
    </div>
  );
}

export default RedirectPageToFoodDelivery;
