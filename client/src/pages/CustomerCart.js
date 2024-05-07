import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./CustomerCart.css";

const CustomerCart = () => {
  // Hardcoded data for restaurant name and cart items
  // const [cartData, setCartData] = useState({
  //   restaurantName: "David and Emily’s Patisserie",
  //   cartItems: [
  //     { id: 1, itemName: "Pain au Chocolat", quantity: 2 },
  //     { id: 2, itemName: "Plain Croissant", quantity: 1 },
  //     { id: 3, itemName: "Chocolate Cake", quantity: 1 },
  //   ],
  // });

  const location = useLocation();
  console.log("Location state:", location.state);
  const navigate = useNavigate();
  const cartData = location.state?.cartData || [];

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

    // setCartData((prevData) => ({
    //   ...prevData,
    //   cartItems: updatedCartItems,
    // }));
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartData.filter((item) => item.id !== itemId);
    // setCartData((prevData) => ({
    //   ...prevData,
    //   cartItems: prevData.cartItems.filter((item) => item.id !== itemId),
    // }));
  };

  const handleCheckout = () => {
    navigate(`/in-app-checkout`);
  };

  return (
    <div className="my-cart">
      <FrameComponent4 />
      <div className="redirect-header-frame">
        <header className="redirect-header">
          <h3 className="cart1">My Cart</h3>
        </header>
      </div>
      <div className="cart-details">
        <div className="restaurant-name2">From {cartData.restaurantId}</div>
        {console.log("Cart data:", cartData)}
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
          <Button className="compare-prices" onClick={handleCheckout}>
            Proceed to Checkout
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
