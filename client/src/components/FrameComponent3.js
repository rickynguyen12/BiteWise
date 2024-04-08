import { useMemo } from "react";
import {Link} from "react-router-dom";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  rectangle26,
  davidAndEmilysPatisserie,
  frenchPatisserie,
  prop,
  mins,
  prop1,
  propWidth,
  propMinWidth,
  propTextTransform,
  propMinWidth1,
}) => {
  const rectangleIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frenchPatisserieStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="frame-wrapper3">
      <div className="rectangle-group">
        <Link to="/david-and-emilys">
        <img
          className="rectangle-icon"
          loading="lazy"
          alt=""
          src={rectangle26}
          style={rectangleIconStyle}
        />
        </Link>
        <div className="david-and-emilys">{davidAndEmilysPatisserie}</div>
        <div className="data-aggregator">
          <div className="french-patisserie" style={frenchPatisserieStyle}>
            {frenchPatisserie}
          </div>
          <div className="input-processor">
            <img className="output-handler-icon" alt="" src="/vector-2.svg" />
            <div className="div" style={divStyle}>
              {prop}
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="group-parent">
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="mins">{mins}</div>
          </div>
          <div className="vector-parent">
            <img className="vector-icon2" alt="" src="/vector-3.svg" />
            <div className="div1" style={div1Style}>
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
