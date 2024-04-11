import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./FoodItemPage.css";
import { TextField, Button } from "@mui/material";

const FoodItemPage2 = () => {
  const location = useLocation();
  const { restaurantName, restaurantInfo } = location.state || {};

  const menuData = useMemo(() => {
    return {
      "Not your mother’s falafel": [
        {
          name: "Wraps",
          items: [
            {
              id: 1,
              name: "Classic Falafel Wrap",
              description:
                "Classic falafel wrapped in a soft pita bread with fresh vegetables and tahini sauce.",
              category: "Wraps",
            },
            {
              id: 2,
              name: "Spicy Falafel Wrap",
              description:
                "Spicy falafel wrapped in a soft pita bread with lettuce, tomatoes, and spicy sauce.",
              category: "Wraps",
            },
          ],
        },
        {
          name: "Rolls",
          items: [
            {
              id: 1,
              name: "Falafel Roll",
              description:
                "Crispy falafel wrapped in a thin flatbread with hummus and pickled vegetables.",
              category: "Rolls",
            },
            {
              id: 2,
              name: "Paneer Tikka Roll",
              description:
                "Paneer tikka wrapped in a soft flatbread with mint chutney and onions.",
              category: "Rolls",
            },
          ],
        },
      ],
      "Veggie Delite Loaded Burrito": [
        {
          name: "Burritos",
          items: [
            {
              id: 1,
              name: "Classic Veggie Burrito",
              description:
                "A classic combination of fresh veggies wrapped in a warm tortilla.",
              category: "Burritos",
            },
            {
              id: 2,
              name: "Spicy Black Bean Burrito",
              description:
                "Black beans with a kick of spice, wrapped in a flour tortilla.",
              category: "Burritos",
            },
          ],
        },
        {
          name: "Bowls",
          items: [
            {
              id: 3,
              name: "Veggie Delite Bowl",
              description:
                "A bowl filled with a variety of fresh vegetables and grains.",
              category: "Bowls",
            },
            {
              id: 4,
              name: "Southwest Quinoa Bowl",
              description: "Quinoa mixed with black beans, corn, and salsa.",
              category: "Bowls",
            },
          ],
        },
      ],
      "Thai Tea - Boba Bulb": [
        {
          name: "Milk Tea",
          items: [
            {
              id: 1,
              name: "Classic Milk Tea",
              description:
                "Black tea mixed with creamy milk and sweetened with tapioca pearls.",
              category: "Milk Tea",
            },
            {
              id: 2,
              name: "Taro Boba",
              description:
                "Taro-flavored milk tea with tapioca pearls for a delightful texture.",
              category: "Milk Tea",
            },
            {
              id: 3,
              name: "Thai Tea",
              description:
                "A traditional Thai tea made with black tea and sweetened condensed milk.",
              category: "Milk Tea",
            },
          ],
        },
        {
          name: "Tea",
          items: [
            {
              id: 4,
              name: "Green Tea",
              description: "A classic green tea with subtle floral notes.",
              category: "Tea",
            },
            {
              id: 5,
              name: "Earl Grey",
              description:
                "A bold and aromatic black tea with bergamot flavor.",
              category: "Tea",
            },
          ],
        },
      ],
    };
  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [selectedItems, setSelectedItems] = useState([]);

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData[restaurantName] || []);
    setSelectedCategory(menuData[restaurantName][0]?.name || []);
  }, [menuData, restaurantName]);

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

  const goToComparePrices = () => {};

  return (
    <div className="food-item">
      <FrameComponent4 />
      <section className="food-item-inner">
        <div className="restaurant-info">
          <img
            className="restaurant-photo"
            src={restaurantInfo.rectangle26}
            alt={restaurantInfo.notYourMothersFalafel}
          />
          <div className="restaurant-details">
            <div className="restaurant-name">
              <h2>{restaurantInfo.notYourMothersFalafel}</h2>
            </div>
            <div className="french-patisserie">
              <p>{restaurantInfo.faasosWrapsRolls}</p>
            </div>
            <div className="info-container">
              <div className="rating">
                <img alt="" src="/vector-2.svg" />
              </div>
              <div className="delivery-time">
                <p>{restaurantInfo.mins} Delivery Time</p>
              </div>
              <div className="cost">
                <p>{restaurantInfo.propAlignSelf}</p>
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
          {menuItems.map((category) => (
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
            menuItems
              .find((category) => category.name === selectedCategory)
              ?.items?.map((item) => (
                <div className="menu-item" key={item.id}>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
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
            <div className="cart-name">
              {restaurantInfo.notYourMothersFalafel}
            </div>
          </p>
          <div className="cart-items">
            {selectedItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
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
          <button onClick={goToComparePrices} className="compare-prices">
            Go To Compare Prices
          </button>
        </div>
      </div>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default FoodItemPage2;
