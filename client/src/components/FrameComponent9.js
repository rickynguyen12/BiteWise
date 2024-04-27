import { useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  grubHub,
  group,
  prop,
  min,
  propAlignSelf,
  propFlex,
  propDebugCommit,
  propWidth,
  propGap,
  propFlex1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      debugCommit: propDebugCommit,
    };
  }, [propAlignSelf, propFlex, propDebugCommit]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const grubHubStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className="frame-parentz1" style={frameDivStyle}>
      <div className="frame-parentz2">
        <div className="grubhub-parent" style={frameDiv1Style}>
          <h3 className="grubhub" style={grubHubStyle}>
            {grubHub}
          </h3>
          <div className="alternative-methods">
            <img className="group-icon1" alt="" src={group} />
          </div>
        </div>
        <div className="frame-parentz3">
          <div className="parent">
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
  );
};

export default FrameComponent9;
