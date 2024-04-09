import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./FoodItemPage.css";
import { TextField, Button } from "@mui/material";

const FoodItemPage = () => {
  const davidAndEmilysPatisserie = {
    name: "David and Emily's Patisserie",
    photo: "/rectangle-26@2x.png",
    type: "french patisserie",
    rating: 4.2,
    deliveryTime: "15 mins",
    cost: "$$",
    menu: [
      {
        name: "Pastries",
        items: [
          {
            id: 1,
            name: "Plain Croissant",
            description:
              "Freshly baked croissant made from flaky layers of buttery dough",
            price: "$5.00",
            category: "Pastries",
          },
          {
            id: 2,
            name: "Pain au Chocolat",
            description: "Buttery pastry with chocolate filling",
            price: "$5.50",
            category: "Pastries",
          },
          {
            id: 3,
            name: "Ham & Cheese Pastry",
            description: "Flaky pastry filled with ham and cheese.",
            price: "$5.00",
            category: "Pastries",
          },
          {
            id: 4,
            name: "Cream Cheese Pastry",
            description:
              "Pastry filled with cream cheese and topped with sliced almonds.",
            price: "$4.50",
            category: "Pastries",
          },
        ],
      },
      {
        name: "Cookies",
        items: [
          {
            id: 1,
            name: "Chocolate Chip Cookie",
            description: "The classic, loaded with chocolate chips.",
            price: "$2.00",
            category: "Cookies",
          },
          {
            id: 2,
            name: "Double Chocolate Cookie",
            description: "Chocolate cookie with chocolate chips.",
            price: "$2.50",
            category: "Cookies",
          },
          {
            id: 3,
            name: "Oatmeal Raisin Cookie",
            description:
              "Traditional flavors of cinnamon, oatmeal and sweet raisins.",
            price: "$2.00",
            category: "Cookies",
          },
        ],
      },
      {
        name: "Cake",
        items: [
          {
            id: 1,
            name: "Mixed Berry Cake",
            description:
              "Layers of vanilla cake, with cream, strawberries, blueberries, and raspberries.",
            price: "$34.00",
            category: "Cake",
          },
          {
            id: 2,
            name: "Chocolate Cake",
            description:
              "3 Layer Chocolate Cake, Chocolate Buttercream Filling.",
            price: "$30.00",
            category: "Cake",
          },
          {
            id: 3,
            name: "Chocolate Strawberry Cake",
            description:
              "3 Layer Chocolate Cake, Whipped Cream Filling with Strawberry.",
            price: "$32.00",
            category: "Cake",
          },
        ],
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Pastries");

  const [selectedItems, setSelectedItems] = useState([]);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const newTotalCost = selectedItems.reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
    setTotalCost(newTotalCost);
  }, [selectedItems]);

  const addToCart = (item, category) => {
    const existingItem = selectedItems.findIndex(
      (selectedItem) =>
        selectedItem.id === item.id && selectedItem.category === category
    );
    if (existingItem !== -1) {
      const updated = [...selectedItems];
      selectedItems[existingItem].quantity += 1;
      setSelectedItems(updated);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1, category }]);
    }
  };

  const removeFromCart = (itemId, category) => {
    const updated = selectedItems.map((item) => {
      if (
        item.id === itemId &&
        item.category === category &&
        item.quantity > 0
      ) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setSelectedItems(updated);
  };

  const goToPlaceOrder = () => {
    //not working
    fetch(`/place_order/Chownow`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to place order");
        }
        return response.text();
      })
      .then((redirectUrl) => {
        window.location.href = redirectUrl;
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  return (
    <div className="food-item">
      <FrameComponent4 />
      <section className="food-item-inner">
        <div className="restaurant-info">
          <img
            className="restaurant-photo"
            src={davidAndEmilysPatisserie.photo}
            alt={davidAndEmilysPatisserie.name}
          />
          <div className="restaurant-details">
            <div className="restaurant-name">
              <h2>{davidAndEmilysPatisserie.name}</h2>
            </div>
            <div className="french-patisserie">
              <p>{davidAndEmilysPatisserie.type}</p>
            </div>
            <div className="info-container">
              <div className="rating">
                <img alt="" src="/vector-2.svg" />
                <p>{davidAndEmilysPatisserie.rating}</p>
              </div>
              <div className="delivery-time">
                <p>{davidAndEmilysPatisserie.deliveryTime} Delivery Time</p>
              </div>
              <div className="cost">
                <p>{davidAndEmilysPatisserie.cost}</p>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-parent5">
                <TextField
                  className="frame-textfield"
                  placeholder="Search for other food items"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#808080" },
                    "& .MuiInputBase-root": {
                      height: "49px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#808080" },
                  }}
                />
                <Button
                  className="sign-in5"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "#fff",
                    borderRadius: "10px",
                    "&:hover": { background: "#29a679" },
                    width: 129,
                    height: 49,
                  }}
                >
                  Favorite
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="menu">
        <div className="menu-category">
          {davidAndEmilysPatisserie.menu.map((category) => (
            <div
              key={category.name}
              className={`category ${
                selectedCategory === category.name ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="menu-items">
          {selectedCategory &&
            davidAndEmilysPatisserie.menu
              .find((category) => category.name === selectedCategory)
              .items.map((item) => (
                <div className="menu-item" key={item.id}>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                  <button
                    className="add-button"
                    onClick={() => addToCart(item, item.category)}
                  >
                    Add +
                  </button>
                </div>
              ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <p>
            from{" "}
            <div className="cart-name">{davidAndEmilysPatisserie.name}</div>
          </p>
          <div className="cart-items">
            {selectedItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => removeFromCart(item.id, item.category)}
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => addToCart(item, item.category)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Subtotal</h2>
            <h3>${totalCost.toFixed(2)}</h3>
          </div>
          <button onClick={goToPlaceOrder} className="place-order">
            Go To Place Order
          </button>
        </div>
      </div>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default FoodItemPage;
