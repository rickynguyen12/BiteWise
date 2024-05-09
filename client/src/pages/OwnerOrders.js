import React, { useState } from "react";
import OwnerIncomingOrders from "../components/OwnerIncomingOrders";
import OwnerHistoryOrders from "../components/OwnerHistoryOrders";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./OwnerOrders.css";
import axios from "axios"; // Import Axios


const OwnerOrders = () => {
  // Hard-coded incoming and history orders for testing
  const [incomingOrders, setIncomingOrders] = useState([
    {
      id: 1,
      orderNumber: "123",
      date: "2024-04-22",
      time: "11:00 AM",
      orderItems: [
        { name: "Classic Cheese Pizza", quantity: 2 },
        { name: "Chicken Wings", quantity: 1 },
        { name: "Smoked Salmon Salad", quantity: 1 },
      ],
      status: "Waiting",
    },
    {
      id: 2,
      orderNumber: "122",
      date: "2024-04-22",
      time: "10:30 AM",
      orderItems: [
        { name: "Caesar Salad", quantity: 1 },
        { name: "Alfredo Pasta", quantity: 2 },
      ],
      status: "Waiting",
    },
    {
      id: 3,
      orderNumber: "121",
      date: "2024-04-22",
      time: "10:20 AM",
      orderItems: [
        { name: "Combo Pizza", quantity: 2 },
        { name: "Chicken Wings", quantity: 1 },
      ],
      status: "Waiting",
    },
  ]);

  const [historyOrders, setHistoryOrders] = useState([
    {
      id: 3,
      orderNumber: "120",
      date: "2024-04-21",
      time: "12:10 PM",
      customerName: "Alice Johnson",
      status: "Completed",
    },
    {
      id: 4,
      orderNumber: "119",
      date: "2024-04-21",
      time: "12:00 PM",
      customerName: "Bob Brown",
      status: "Cancelled",
    },
    {
      id: 5,
      orderNumber: "118",
      date: "2024-04-21",
      time: "11:45 AM",
      customerName: "Jack Jo",
      status: "Completed",
    },
  ]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  // const handleAcceptOrder = (orderId) => {
  //   console.log("Accepted order:", orderId);
  //   // Update order status to 'Accepted'
  //   setIncomingOrders((prevOrders) =>
  //     prevOrders.map((order) =>
  //       order.id === orderId ? { ...order, status: "Accepted" } : order
  //     )
  //   );
  // };

  const handleAcceptOrder = async (orderId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/accept/${orderId}`
      );
      console.log("Order Accepted:", response.data);
    } catch (error) {
      console.error("Error Accepting Order:", error);
    }
  };

  // const handleRejectOrder = (orderId) => {
  //   // Implement logic to reject the order
  //   console.log("Rejected order:", orderId);
  //   // Update order status to 'Rejected'
  //   setIncomingOrders((prevOrders) =>
  //     prevOrders.map((order) =>
  //       order.id === orderId ? { ...order, status: "Rejected" } : order
  //     )
  //   );
  // };

  const handleRejectOrder = async (orderId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/reject/${orderId}`
      );
      console.log("Order Rejected:", response.data);
    } catch (error) {
      console.error("Error Rejecting Order:", error);
    }
  };

  return (
    <div className="owner-orders">
      <FrameComponent4 />
      <div className="incoming-orders-frame">
        <header className="incoming-wrapper">
          <h3 className="incoming1">Orders</h3>
        </header>
        <div className="incoming-order-cards">
          <div className="section-header">
            <img alt="" src="/incoming.png" className="icon" />
            <h3>Incoming</h3>
          </div>
          <OwnerIncomingOrders
            orders={incomingOrders}
            onAccept={handleAcceptOrder}
            onReject={handleRejectOrder}
          />
        </div>
      </div>
      <div className="history-orders-frame">
        <div className="history-orders">
          <div className="section-header">
            <img alt="" src="/history.png" className="icon" />
            <h3>History</h3>
          </div>
          <OwnerHistoryOrders orders={historyOrders} />
        </div>
      </div>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default OwnerOrders;
