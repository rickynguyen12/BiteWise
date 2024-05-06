import FrameComponent4 from "../components/FrameComponent4";
import UberEatsLabel from "../components/UberEatsLabel";
import "./ViewAllDeals.css";

const ViewAllDeals = () => {
  return (
    <div className="view-all-deals">
      <FrameComponent4 />
      <div className="view-all-deals-frame">
        <header className="view-all-deals-header">
          <h3 className="view1">View All Deals</h3>
        </header>
      </div>
      <UberEatsLabel />
    </div>
  );
};

export default ViewAllDeals;
