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
      "Paneer Tikka Rice Bowl": [
        {
          name: "Rice Bowl",
          items: [
            {
              id: 1,
              name: "Paneer Tikka Rice Bowl",
              description:
                "Succulent paneer tikka served over fragrant basmati rice with grilled vegetables.",
              category: "Rice Bowl",
            },
            {
              id: 2,
              name: "Chicken Tikka Rice Bowl",
              description:
                "Juicy chicken tikka served over fragrant basmati rice with grilled vegetables.",
              category: "Rice Bowl",
            },
            {
              id: 3,
              name: "Veggie Delight Rice Bowl",
              description:
                "Assorted grilled vegetables served over fragrant basmati rice.",
              category: "Rice Bowl",
            },
          ],
        },
        {
          name: "Appetizer",
          items: [
            {
              id: 6,
              name: "Vegetable Pakoras",
              description:
                "Crispy fritters made with assorted vegetables and chickpea flour.",
              category: "Appetizer",
            },
            {
              id: 7,
              name: "Paneer Tikka",
              description:
                "Tandoori grilled paneer cubes marinated in yogurt and spices.",
              category: "Appetizer",
            },
          ],
        },
        {
          name: "Beverage",
          items: [
            {
              id: 8,
              name: "Mango Lassi",
              description:
                "Refreshing yogurt-based drink blended with ripe mangoes.",
              category: "Beverage",
            },
            {
              id: 9,
              name: "Masala Chai",
              description:
                "Traditional Indian spiced tea brewed with milk and aromatic spices.",
              category: "Beverage",
            },
          ],
        },
      ],
      "Baked Pizza Wrap - Vegetarian": [
        {
          name: "Wraps",
          items: [
            {
              id: 1,
              name: "Classic Baked Pizza Wrap",
              description:
                "Vegetarian baked pizza wrapped in a soft tortilla with cheese, tomato sauce, and assorted vegetables.",
              category: "Wraps",
            },
            {
              id: 2,
              name: "Spicy Baked Pizza Wrap",
              description:
                "Spicy vegetarian baked pizza wrapped in a soft tortilla with jalapenos, cheese, tomato sauce, and assorted vegetables.",
              category: "Wraps",
            },
          ],
        },
        {
          name: "Rolls",
          items: [
            {
              id: 1,
              name: "Baked Pizza Roll",
              description:
                "Vegetarian baked pizza rolled in a thin flatbread with cheese, tomato sauce, and assorted vegetables.",
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
      "Butter Chicken Pizza - 8 serve": [
        {
          name: "Pizza",
          items: [
            {
              id: 1,
              name: "Butter Chicken Pizza",
              description:
                "Delicious pizza topped with tender butter chicken pieces, creamy sauce, mozzarella cheese, and garnished with cilantro.",
              category: "Pizza",
            },
            {
              id: 2,
              name: "Vegetarian Butter Chicken Pizza",
              description:
                "A vegetarian twist on the classic butter chicken pizza, with flavorful vegetarian chicken pieces and creamy sauce.",
              category: "Pizza",
            },
          ],
        },
        {
          name: "Appetizer",
          items: [
            {
              id: 3,
              name: "Garlic Bread",
              description:
                "Toasted bread slices brushed with garlic butter and sprinkled with herbs.",
              category: "Appetizer",
            },
            {
              id: 4,
              name: "Chicken Wings",
              description:
                "Juicy chicken wings marinated and baked to perfection, served with a choice of dipping sauce.",
              category: "Appetizer",
            },
          ],
        },
        {
          name: "Beverage",
          items: [
            {
              id: 5,
              name: "Mango Smoothie",
              description:
                "Refreshing smoothie made with ripe mangoes, yogurt, and a hint of honey.",
              category: "Beverage",
            },
            {
              id: 6,
              name: "Iced Tea",
              description:
                "Cool and refreshing iced tea available in a variety of flavors.",
              category: "Beverage",
            },
          ],
        },
      ],
      "Mexican Signature Wraps": [
        {
          name: "Wraps",
          items: [
            {
              id: 1,
              name: "Classic Chicken Fajita Wrap",
              description:
                "Grilled chicken strips with sautéed onions and bell peppers, topped with salsa and sour cream, wrapped in a soft flour tortilla.",
              category: "Wraps",
            },
            {
              id: 2,
              name: "Spicy Beef Burrito Wrap",
              description:
                "Spicy seasoned ground beef with rice, beans, cheese, lettuce, and salsa, wrapped in a warm flour tortilla.",
              category: "Wraps",
            },
            {
              id: 3,
              name: "Vegetarian Quesadilla Wrap",
              description:
                "Grilled vegetables, black beans, cheese, lettuce, and guacamole, wrapped in a soft flour tortilla.",
              category: "Wraps",
            },
          ],
        },
        {
          name: "Sides",
          items: [
            {
              id: 4,
              name: "Chips and Salsa",
              description:
                "Crispy tortilla chips served with fresh salsa for dipping.",
              category: "Sides",
            },
            {
              id: 5,
              name: "Mexican Street Corn",
              description:
                "Grilled corn on the cob topped with mayonnaise, cotija cheese, chili powder, and lime juice.",
              category: "Sides",
            },
          ],
        },
      ],
      "Southwest Chicken Salad": [
        {
          name: "Salads",
          items: [
            {
              id: 1,
              name: "Classic Southwest Chicken Salad",
              description:
                "Crispy lettuce mix topped with grilled chicken breast, black beans, corn, tomatoes, avocado, and tortilla strips, served with a creamy cilantro-lime dressing.",
              category: "Salads",
            },
            {
              id: 2,
              name: "Spicy Chipotle Chicken Salad",
              description:
                "Grilled chicken breast tossed in spicy chipotle sauce, mixed with romaine lettuce, roasted peppers, black beans, corn, and crispy tortilla strips, served with a chipotle ranch dressing.",
              category: "Salads",
            },
            {
              id: 3,
              name: "Vegetarian Southwest Salad",
              description:
                "A hearty salad with black beans, corn, tomatoes, avocado, red onions, and tortilla strips, served with a tangy lime vinaigrette.",
              category: "Salads",
            },
          ],
        },
        {
          name: "Sides",
          items: [
            {
              id: 4,
              name: "Tortilla Soup",
              description:
                "A hearty soup with chicken, tomatoes, corn, and beans, garnished with crispy tortilla strips and shredded cheese.",
              category: "Sides",
            },
            {
              id: 5,
              name: "Cilantro-Lime Rice",
              description:
                "Fluffy white rice cooked with fresh cilantro and lime juice.",
              category: "Sides",
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
                <p>{restaurantInfo.rating}</p>
              </div>
              <div className="delivery-time">
                <p>{restaurantInfo.mins} Delivery Time</p>
              </div>
              <div className="cost">
                <p>{restaurantInfo.cost}</p>
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
                  <img
                    alt=""
                    src="/star_fav.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "8px",
                    }}
                  />
                  Favorite
                </Button>
              </div>
            </div>
          </div>
          <div className="offer">
            <h3>Offers</h3>
            <div className="offer-details">
              <img
                alt=""
                src="/offer.png"
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "8px",
                }}
              />
              <p>{restaurantInfo.prop}</p>
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
