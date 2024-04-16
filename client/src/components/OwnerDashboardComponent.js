import React from "react";
import { Link } from "react-router-dom";
import "./OwnerDashboardComponent.css";

const OwnerDashboardComponent = ({ ownerDetails }) => {
  return (
    <div className="owner-dashboard">
      <div className="dashboard-options">
        <Link to="/owner-orders" className="dashboard-option">
          <div className="option-content">
            <img alt="" src="/orders.png" className="icon" />
            Orders
          </div>
        </Link>
        <Link
          to={{ pathname: "/owner-edit-menu", state: { ownerDetails } }}
          className="dashboard-option"
        >
          <div className="option-content">
            <img alt="" src="/edit-menu.png" className="icon" />
            Edit Menu
          </div>
        </Link>
        <Link to="/owner-edit-profile" className="dashboard-option">
          <div className="option-content">
            <img alt="" src="/edit-profile.png" className="icon" />
            Edit Business Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OwnerDashboardComponent;
