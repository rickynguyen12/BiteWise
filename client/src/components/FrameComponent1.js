import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  rectangle26,
  notYourMothersFalafel,
  faasosWrapsRolls,
  vector,
  prop,
  group,
  mins,
  propTop,
  propLeft,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="rectangle-parent2" style={frameDiv1Style}>
      <img className="frame-child5" alt="" src={rectangle26} />
      <div className="not-your-mothers">{notYourMothersFalafel}</div>
      <div className="faasos-wraps-rolls-wrapper">
        <div className="faasos-wraps">{faasosWrapsRolls}</div>
      </div>
      <div className="frame-parent10">
        <div className="vector-parent3">
          <img className="vector-icon9" alt="" src={vector} />
          <div className="div5">{prop}</div>
        </div>
        <div className="group-parent3">
          <img className="group-icon3" alt="" src={group} />
          <div className="div5">{mins}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
