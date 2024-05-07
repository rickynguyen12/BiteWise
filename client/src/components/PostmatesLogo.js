import { useMemo } from "react";
import "./PostmatesLogo.css";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/lottie-player";

const PostmatesLogo = ({ postmates, group, sVG, prop, min, propPadding }) => {
  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/in-app-checkout");
  };
  const postmatesLogoStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="postmates-logo" style={postmatesLogoStyle}>
      <div className="frame-container">
        <div className="frame-div">
          <div className="postmates-parent">
            <h3 className="postmates">{postmates}</h3>
            <div className="grub-hub-logo">
              <img className="group-icon" alt="" src={group} />
            </div>
            <img className="svg-icon" loading="lazy" alt="" src={sVG} />
          </div>
          <div className="order-button-parent">
            <div className="order-button">
              <div className="div">{prop}</div>
              <div className="est-fee">Est. Fee</div>
            </div>
            <div className="order-button1">
              <div className="min">{min}</div>
              <div className="est-time">Est. Time</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapperz">
          <button className="place-order-wrapper" onClick={navigateCheckout}>
            <div className="place-order">Place Order</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostmatesLogo;
