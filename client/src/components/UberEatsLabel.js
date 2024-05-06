import PostmatesLogo from "./PostmatesLogo";
import FrameComponent9 from "./FrameComponent9";
import "./UberEatsLabel.css";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/lottie-player";

const UberEatsLabel = () => {
  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/in-app-checkout");
  };
  return (
    <div className="uber-eats-label">
      <div className="rectangle-parentz">
        <div className="frame-child" />
        <div className="place-order-button">
          <div className="switch-to-pickup-label">
            <div className="chow-now-label">
              <div className="est-fee-and-time-container">
                <div className="deliverycom-label">
                  <img
                    className="deliverycom-label-child"
                    loading="lazy"
                    alt=""
                    src="/david-circle.png"
                  />
                </div>
                <div className="david-and-emilys-patisserie-parent">
                  <h3 className="david-and-emilys">
                    David and Emily’s Patisserie
                  </h3>
                  <div className="first-child-container">
                    <div className="third-child-container">
                      <img
                        className="third-child-container-child"
                        loading="lazy"
                        alt=""
                        src="/group-98.png"
                      />
                      <img
                        className="third-child-container-item"
                        loading="lazy"
                        alt=""
                        src="/group-95.png"
                      />
                    </div>
                    <div className="mi">2.04 mi</div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/redirect-page-to-food-delivery-app"
              className="pickup-page-link"
            >
              <img
                className="switch-to-pickup-label-child"
                loading="lazy"
                alt=""
                src="/group-124.png"
              />
            </a>
          </div>
        </div>
        <div className="eighth-child-container">
          <img
            className="delivery-service-line"
            loading="lazy"
            alt=""
            src="/line-7.png"
          />
          <div className="ninth-child-container">
            <div className="tenth-child-container">
              <div className="eleventh-child-container">
                <div className="twelfth-child-container">
                  <div className="seventeenth-child-container">
                    <img
                      className="group-icon2"
                      loading="lazy"
                      alt=""
                      src="/pickup-black.png"
                    />
                    <div className="nineteenth-child-container">
                      <h1 className="uber-eats">Uber Eats</h1>
                      <div className="twenty-first-child-container">
                        <h3 className="best-deal">Best Deal</h3>
                      </div>
                    </div>
                  </div>
                  <div className="thirteenth-child-container">
                    <div className="fourteen-child-container">
                      <div className="fifteenth-child-container">$0.49</div>
                    </div>
                    <div className="est-fee2">Est. Fee</div>
                  </div>
                  <div className="thirteenth-child-container1">
                    <div className="min-wrapper">
                      <div className="min2">35 min</div>
                    </div>
                    <div className="est-time2">Est. Time</div>
                  </div>
                </div>
              </div>
              <div className="place-order-btn-parent">
                <button className="place-order-btn" onClick={navigateCheckout}>
                  <div className="place-order2">Place Order</div>
                </button>
                <div className="pickup-option-btn">
                  <div className="switch-to-pickup">Switch to Pickup</div>
                </div>
                <img
                  className="delivery-service-line"
                  loading="lazy"
                  alt=""
                  src="/line-7.png"
                />
              </div>
            </div>
          </div>
          <PostmatesLogo
            postmates="Postmates"
            group="/pickup-black.png"
            sVG="/pickup2.png"
            prop="$2.00"
            min="35 min"
          />
          <img
            className="delivery-service-line"
            loading="lazy"
            alt=""
            src="/line-7.png"
          />
          <FrameComponent9
            grubHub="GrubHub"
            group="/pickup-black.png"
            prop="$2.07"
            min="40 min"
          />
          <img
            className="delivery-service-line"
            loading="lazy"
            alt=""
            src="/line-7.png"
          />
          <FrameComponent9
            grubHub="ChowNow"
            group="/pickup-black.png"
            prop="$5.00"
            min="60 min"
            propPadding="0px var(--padding-12xl) 0px var(--padding-19xl)"
          />
          <img
            className="delivery-service-line"
            loading="lazy"
            alt=""
            src="/line-7.png"
          />
          <PostmatesLogo
            postmates="delivery.com"
            group="/pickup-black.png"
            sVG="/pickup2.png"
            prop="$5.95"
            min="50 min"
            propPadding="0px var(--padding-12xl) 0px var(--padding-19xl)"
          />
        </div>
        {/* <div className="third-party-services-parent">
          <div className="third-party-services">
            <div className="third-party-services-inner"></div>
            <img
              className="third-party-services-child"
              loading="lazy"
              alt=""
              src="/line-10.svg"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UberEatsLabel;
