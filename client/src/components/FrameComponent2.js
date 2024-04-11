import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  rectangle26,
  notYourMothersFalafel,
  faasosWrapsRolls,
  prop,
  mins,
  propAlignSelf,
  propWidth,
  propPadding,
  propAlignSelf1,
  propHeight,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  const notYourMothersStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      height: propHeight,
    };
  }, [propAlignSelf1, propHeight]);

  const faasosWrapsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <Link
      to={"/food-item-page2"}
      state={{
        restaurantName: notYourMothersFalafel,
        restaurantInfo: {
          rectangle26,
          notYourMothersFalafel,
          faasosWrapsRolls,
          prop,
          mins,
          propAlignSelf,
          propWidth,
          propPadding,
          propAlignSelf1,
          propHeight,
          propMinWidth,
          propMinWidth1,
        },
      }}
      className="link"
    >
      <div className="rectangle-container" style={frameDivStyle}>
        <img className="frame-child1" alt="" src={rectangle26} />
        <div className="not-your-mothers" style={notYourMothersStyle}>
          {notYourMothersFalafel}
        </div>
        <div className="faasos-wraps-rolls-wrapper">
          <div className="faasos-wraps" style={faasosWrapsStyle}>
            {faasosWrapsRolls}
          </div>
        </div>
        <div className="antdesignstarfilled-parent">
          <div className="antdesignstarfilled">
            <img className="data-aggregator-icon" alt="" src="/vector-10.svg" />
            <div className="div2" style={div2Style}>
              {prop}
            </div>
          </div>
          <div className="group-group">
            <img className="group-icon1" alt="" src="/group.svg" />
            <div className="mins1">{mins}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FrameComponent2;
