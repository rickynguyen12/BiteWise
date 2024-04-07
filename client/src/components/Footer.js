import { useMemo } from "react";
import "./Footer.css";

const Footer = ({ propHeight, propHeight1 }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const dataAggregatorStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <footer className="footer">
      <div className="frame-parent17">
        <div className="frame-parent18">
          <div className="subtract-wrapper" style={frameDiv1Style}>
            <img
              className="subtract-icon3"
              loading="lazy"
              alt=""
              src="/subtract.svg"
            />
          </div>
          <div className="contact-parent">
            <div className="contact">Contact:</div>
            <b className="b">+91 1234567899</b>
          </div>
        </div>
        <div className="data-aggregator1" style={dataAggregatorStyle}>
          <img
            className="facebook-icon"
            loading="lazy"
            alt=""
            src="/facebook-icon.svg"
          />
          <img className="vector-icon5" alt="" src="/vector-19.svg" />
          <img
            className="twitter-icon"
            loading="lazy"
            alt=""
            src="/twitter-icon.svg"
          />
        </div>
        <div className="designed-by-revanth-ui-figm-wrapper">
          <div className="designed-by-revanth-ui">
            Designed By @revanth_ui | Figma Community
          </div>
        </div>
        <div className="calorie-calculator">About us</div>
        <div className="delivery">Delivery</div>
        <div className="about-us">{`Help & Support`}</div>
        <div className="blog">{`T&C`}</div>
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      </div>
    </footer>
  );
};

export default Footer;
