import { useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({ grubHub, group, prop, min, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  // const frameDiv1Style = useMemo(() => {
  //   return {
  //     width: propWidth,
  //     gap: propGap,
  //   };
  // }, [propWidth, propGap]);

  // const grubHubStyle = useMemo(() => {
  //   return {
  //     flex: propFlex1,
  //   };
  // }, [propFlex1]);

  return (
    <div className="frame-outside" style={frameDivStyle}>
      <div className="frame-parentz1">
        <div className="frame-parentz2">
          <div className="grubhub-parent2">
            <h3 className="grubhub-name">{grubHub}</h3>
            <div className="alternative-methods">
              <img className="group-icon1" alt="" src={group} />
            </div>
          </div>
          <div className="frame-parentz3">
            <div className="parent-fee">
              <div className="div1">{prop}</div>
              <div className="est-fee1">Est. Fee</div>
            </div>
            <div className="min-parent">
              <div className="min1">{min}</div>
              <div className="est-time1">Est. Time</div>
            </div>
          </div>
        </div>
        <div className="confirm-step-button">
          <button className="place-order-container">
            <div className="place-order1">Place Order</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
