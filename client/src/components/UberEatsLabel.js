import PostmatesLogo from "./PostmatesLogo";
import FrameComponent9 from "./FrameComponent9";
import "./UberEatsLabel.css";

const UberEatsLabel = () => {
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
                    src="/ellipse-11@2x.png"
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
                        src="/group-98.svg"
                      />
                      <img
                        className="third-child-container-item"
                        loading="lazy"
                        alt=""
                        src="/group-95.svg"
                      />
                    </div>
                    <div className="mi">2.04 mi</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="switch-to-pickup-label-child"
              loading="lazy"
              alt=""
              src="/group-124.svg"
            />
          </div>
        </div>
        <div className="eighth-child-container">
          <div className="ninth-child-container">
            <div className="tenth-child-container">
              <div className="eleventh-child-container">
                <div className="twelfth-child-container">
                  <div className="seventeenth-child-container">
                    <img
                      className="group-icon2"
                      loading="lazy"
                      alt=""
                      src="/group.svg"
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
                <button className="place-order-btn">
                  <div className="place-order2">Place Order</div>
                </button>
                <div className="pickup-option-btn">
                  <div className="switch-to-pickup">Switch to Pickup</div>
                </div>
              </div>
            </div>
          </div>
          <PostmatesLogo
            postmates="Postmates"
            group="/group-1.svg"
            sVG="/svg.svg"
            prop="$2.00"
            min="35 min"
          />
          <FrameComponent9
            grubHub="GrubHub"
            group="/group-2.svg"
            prop="$2.07"
            min="40 min"
          />
          <img
            className="eighth-child-container-child"
            alt=""
            src="/group-125.svg"
          />
        </div>
        <div className="third-party-services-parent">
          <div className="third-party-services">
            <div className="third-party-services-inner">
              <FrameComponent9
                grubHub="ChowNow"
                group="/group-3.svg"
                prop="$5.00"
                min="60 min"
                propAlignSelf="unset"
                propFlex="1"
                propDebugCommit="unset"
                propWidth="unset"
                propGap="6px"
                propFlex1="unset"
              />
            </div>
            <img
              className="third-party-services-child"
              loading="lazy"
              alt=""
              src="/line-10.svg"
            />
          </div>
          <PostmatesLogo
            postmates="delivery.com"
            group="/group-4.svg"
            sVG="/svg-1.svg"
            prop="$5.95"
            min="50 min"
            propPadding="0px var(--padding-12xl) 0px var(--padding-19xl)"
          />
        </div>
      </div>
    </div>
  );
};

export default UberEatsLabel;