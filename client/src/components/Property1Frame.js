import { useMemo } from "react";
import "./Property1Frame.css";

const Property1Frame = ({ vector, property1Frame27Position }) => {
  const property1Frame27Style = useMemo(() => {
    return {
      position: property1Frame27Position,
    };
  }, [property1Frame27Position]);

  return (
    <div className="property-1frame-27" style={property1Frame27Style}>
      <div className="restaurant">Restaurant</div>
      <div className="vector-wrapper">
        <img className="vector-icon6" alt="" src={vector} />
      </div>
    </div>
  );
};

export default Property1Frame;
