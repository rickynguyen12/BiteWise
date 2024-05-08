import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { menuData } from "./MenuData";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./FoodItemPage.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const FoodItemPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [merchantData, setSearchResults] = useState({
    merchant: null,
    menuItems: [],
  });
  const [uniqueCategories, setUniqueCategories] = useState(new Set());
  const searchMerchant = searchParams.get("merchant");
  console.log("Searched: ", searchMerchant);

  const [selectedCategory, setSelectedCategory] = useState([]);

  // Fetch Search results based on searchQuery
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/get-merch-info",
          {
            params: {
              query: searchMerchant,
            }, // Bobs Burgers
          }
        );
        setSearchResults(response.data);
        setSelectedCategory(response.data.menuItems[0].category);
        const categoriesSet = new Set();
        response.data.menuItems.forEach((item) => {
          categoriesSet.add(item.category);
        });
        setUniqueCategories(categoriesSet);
      } catch (error) {
        console.error("Error sending search request:", error);
      }
    };

    if (searchMerchant) {
      fetchData();
    }
  }, [searchMerchant]);

  // Fetch Search results based on searchQuery
  useEffect(() => {
    const fetchData = async () => {
      try {
        localStorage.setItem("cart", JSON.stringify([]));
        const response = await axios.get(
          "http://localhost:8080/get-merch-info",
          {
            params: {
              query: searchMerchant,
            }, // Bobs Burgers
          }
        );
        setSearchResults(response.data);
        if (response.data.menuItems.length > 0) {
          setSelectedCategory(response.data.menuItems[0].category);
        }
      } catch (error) {
        console.error("Error sending search request:", error);
      }
    };

    if (searchMerchant) {
      fetchData();
    }
  }, [searchMerchant]);

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart"));
    if (storedCartItems) {
      setSelectedItems(storedCartItems);
    }
  }, []);

  const addToCart = (item, category, restaurantName) => {
    const existingItem = selectedItems.findIndex(
      (selectedItem) =>
        selectedItem.id === item.id && selectedItem.category === category
    );
    if (existingItem !== -1) {
      const updated = [...selectedItems];
      updated[existingItem].quantity += 1;
      // selectedItems[existingItem].quantity += 1;
      setSelectedItems(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
    } else {
      const updatedItems = [
        ...selectedItems,
        { ...item, quantity: 1, category, restaurantName },
      ];
      setSelectedItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
  };

  const removeFromCart = (itemId, category) => {
    const updated = selectedItems
      .map((item) => {
        if (
          item.id === itemId &&
          item.category === category &&
          item.quantity > 0
        ) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity > 0);
    setSelectedItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart", { state: { selectedItems } });
  };

  console.log(merchantData);

  return (
    <div className="food-item">
      <FrameComponent4 />
      <section className="food-item-inner">
        <div className="restaurant-info">
          <img
            className="restaurant-photo"
            src={
              merchantData &&
              merchantData.merchant &&
              merchantData.merchant.logo_url
            } // TODO: CHANGE TO LOGOurl
            alt="A placeholder Description" // Todo replace???
          />
          <div className="restaurant-details">
            <div className="restaurant-name">
              <h2>
                {merchantData &&
                  merchantData.merchant &&
                  merchantData.merchant.merchantname}
              </h2>
            </div>
            <div className="french-patisserie">
              <p>
                {merchantData &&
                  merchantData.merchant &&
                  `${merchantData.merchant.streetAddress} ${merchantData.merchant.city}, ${merchantData.merchant.state}`}
              </p>
            </div>
            <div className="info-container">
              <div className="rating">
                <img
                  alt=""
                  src="/vector-2.svg"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(38%) sepia(99%) saturate(6100%) hue-rotate(134deg) brightness(90%) contrast(88%)",
                  }}
                />
                <p>5.0</p>
              </div>
              <div className="delivery-time">
                <p>15 minutes Delivery Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="menu">
        <div className="menu-category">
          {merchantData &&
            merchantData.menuItems &&
            Array.from(uniqueCategories).map((category) => (
              <div
                key={category}
                className={`category ${
                  selectedCategory === category ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </div>
            ))}
        </div>
        <div className="menu-items">
          {merchantData.menuItems.map((menuItem) => {
            if (menuItem.category === selectedCategory) {
              return (
                <div className="menu-item" key={menuItem.id}>
                  <div className="item-info">
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.description}</p>
                  </div>
                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(
                        menuItem,
                        menuItem.category,
                        merchantData.merchant.merchantname
                      )
                    }
                  >
                    Add +
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div className="cart">
          <h2>My Bag</h2>
          <p>
            from{" "}
            <div className="cart-name">
              {merchantData &&
                merchantData.merchant &&
                merchantData.merchant.merchantname}
            </div>
          </p>
          <div className="cart-items">
            {selectedItems.map((item, index) => {
              // Render the item only if its quantity is greater than 0
              if (item.quantity > 0) {
                return (
                  <div key={index} className="cart-item">
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-button"
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.category,
                            merchantData.merchant.restaurant_id
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() =>
                          addToCart(
                            item,
                            item.category,
                            merchantData.merchant.restaurant_id
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              }
              return null; // Return null for items with quantity 0 to skip rendering
            })}
          </div>
          <button onClick={goToCart} className="compare-prices">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default FoodItemPage;
