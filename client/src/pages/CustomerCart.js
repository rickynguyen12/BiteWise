import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./CustomerCart.css";

const CustomerCart = () => {
  // Hardcoded data for restaurant name and cart items
  const [cartData, setCartData] = useState({
    restaurantName: "David and Emily’s Patisserie",
    cartItems: [
      { id: 1, itemName: "Pain au Chocolat", quantity: 2 },
      { id: 2, itemName: "Plain Croissant", quantity: 1 },
      { id: 3, itemName: "Chocolate Cake", quantity: 1 },
    ],
  });

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartData.cartItems
      .map((item) => {
        if (item.id === itemId) {
          const quantity = Math.max(0, newQuantity);
          if (quantity === 0) {
            return null;
          }
          return {
            ...item,
            quantity,
          };
        }
        return item;
      })
      .filter(Boolean);

    setCartData((prevData) => ({
      ...prevData,
      cartItems: updatedCartItems,
    }));
  };

  const handleRemoveItem = (itemId) => {
    setCartData((prevData) => ({
      ...prevData,
      cartItems: prevData.cartItems.filter((item) => item.id !== itemId),
    }));
  };

  const navigate = useNavigate();

  const handleComparePrices = () => {
    navigate(`/redirect-page-to-food-delivery-app2`);
  };

  return (
    <div className="my-cart">
      <FrameComponent4 />
      <div className="cart-parent">
        <header className="cart2">
          <h2 className="cart1">My Cart</h2>
        </header>
      </div>
      <div className="cart-details">
        <div className="restaurant-name2">From {cartData.restaurantName}</div>
        {cartData.cartItems.map((item) => (
          <div key={item.id} className="cart-item2">
            <div className="cart-item-name">{item.itemName}</div>
            <div className="quantity">
              <Button
                className="quantity-button2 minus"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity === 0}
              >
                –
              </Button>
              <span>{item.quantity}</span>
              <Button
                className="quantity-button2 plus"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
            <div className="remove-container">
              <Button
                className="remove-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <div className="compare-prices-container">
          <Button className="compare-prices" onClick={handleComparePrices}>
            Go to Compare Prices
          </Button>
        </div>
      </div>
      <div className="dashboard-footer">
        <Footer propHeight="20.9px" propHeight1="24px" />
      </div>
    </div>
  );
};

export default CustomerCart;
