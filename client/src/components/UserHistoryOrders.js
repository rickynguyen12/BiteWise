import React from "react";
import "./UserHistoryOrders.css";

const UserHistoryOrders = ({ orders }) => {
  return (
    <div className="history-orders">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Restaurant Name</th>
            <th>Order Details</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
              <td>{order.restaurantName}</td>
              <td>
                  <div>
                      Quantity x Item Name, Item Price
                  </div>
              </td>
              <td>{order.status}</td>
              <td>
                Cancel Button
              </td>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserHistoryOrders;
