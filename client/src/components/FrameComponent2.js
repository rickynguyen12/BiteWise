import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  rectangle26,
  davidAndEmilysPatisserie,
  frenchPatisserie,
  vector,
  prop,
  group,
  mins,
  vector1,
  prop1,
  propLeft,
  propTop,
  propWidth,
  propTextTransform,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className="frame-wrapper2" style={frameDivStyle}>
      <div className="rectangle-parent1">
        <img
          className="rectangle-icon"
          alt=""
          src={rectangle26}
          style={rectangleIconStyle}
        />
        <div className="david-and-emilys">{davidAndEmilysPatisserie}</div>
        <div className="french-patisserie-parent">
          <div className="french-patisserie">{frenchPatisserie}</div>
          <div className="vector-parent1">
            <img className="vector-icon7" alt="" src={vector} />
            <div className="div3" style={divStyle}>
              {prop}
            </div>
          </div>
        </div>
        <div className="frame-parent9">
          <div className="group-parent2">
            <img className="group-icon2" alt="" src={group} />
            <div className="div3">{mins}</div>
          </div>
          <div className="group-parent2">
            <img className="vector-icon8" alt="" src={vector1} />
            <div className="div3">{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
