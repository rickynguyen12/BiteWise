import "./FrameComponent.css";

const FrameComponent = ({
  rectangle26,
  bakedPizzaWrapVegetarian,
  faasosWrapsRolls,
  vector,
  prop,
  group,
  mins,
}) => {
  return (
    <div className="rectangle-parent3">
      <img className="frame-child6" alt="" src={rectangle26} />
      <div className="baked-pizza-wrap">{bakedPizzaWrapVegetarian}</div>
      <div className="faasos-wraps-rolls-container">
        <div className="faasos-wraps1">{faasosWrapsRolls}</div>
      </div>
      <div className="frame-parent11">
        <div className="vector-parent4">
          <img className="vector-icon10" alt="" src={vector} />
          <div className="div6">{prop}</div>
        </div>
        <div className="group-parent4">
          <img className="group-icon4" alt="" src={group} />
          <div className="div6">{mins}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
