import React, { useState } from "react";
import UserHistoryOrders from "../components/UserHistoryOrders";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./UserOrders.css";

const UserOrders = () => {
  // Hard-coded history orders for testing

  const [historyOrders, setHistoryOrders] = useState([
    {
      id: 3,
      orderNumber: "120",
      date: "2024-04-21",
      time: "12:10 PM",
      restaurantName: "Kovai Cafe",
      orderDetails: [
        { name: "Classic Cheese Pizza", quantity: 2 },
        { name: "Chicken Wings", quantity: 1 },
        { name: "Smoked Salmon Salad", quantity: 1 },
      ],
      status: "Completed",
    },
    {
      id: 4,
      orderNumber: "119",
      date: "2024-04-21",
      time: "12:00 PM",
      restaurantName: "TASTY",
      orderDetails: [
        { name: "Caesar Salad", quantity: 1 },
        { name: "Alfredo Pasta", quantity: 2 },
      ],
      status: "Cancelled",
    },
    {
      id: 5,
      orderNumber: "118",
      date: "2024-04-21",
      time: "11:45 AM",
      restaurantName: "Jill's",
      orderDetails: [
        { name: "Combo Pizza", quantity: 2 },
        { name: "Chicken Wings", quantity: 1 },
      ],
      status: "Pending",
    },
  ]);

  return (
    <div className="owner-orders">
      <FrameComponent4 />
      <div className="history-orders-frame">
        <div className="history-orders">
          <div className="section-header">
            <img alt="" src="/history.png" className="icon" />
            <h3>History</h3>
          </div>
          <UserHistoryOrders orders={historyOrders} />
        </div>
      </div>
      <div className="footer-div">
        <Footer propHeight="20.9px" propHeight1="24px" />
      </div>
    </div>
  );
};

export default UserOrders;
