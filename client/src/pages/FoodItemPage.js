import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./FoodItemPage.css";
import { TextField, Button } from "@mui/material";

const FoodItemPage = () => {
  const location = useLocation();
  const { restaurantName, restaurantInfo } = location.state || {};

  const menuData = useMemo(() => {
    return {
      "David and Emily’s Patisserie": [
        {
          name: "Pastries",
          items: [
            {
              id: 1,
              name: "Plain Croissant",
              description:
                "Freshly baked croissant made from flaky layers of buttery dough",
              category: "Pastries",
            },
            {
              id: 2,
              name: "Pain au Chocolat",
              description: "Buttery pastry with chocolate filling",
              category: "Pastries",
            },
            {
              id: 3,
              name: "Ham & Cheese Pastry",
              description: "Flaky pastry filled with ham and cheese.",
              category: "Pastries",
            },
            {
              id: 4,
              name: "Cream Cheese Pastry",
              description:
                "Pastry filled with cream cheese and topped with sliced almonds.",
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
              category: "Cookies",
            },
            {
              id: 2,
              name: "Double Chocolate Cookie",
              description: "Chocolate cookie with chocolate chips.",
              category: "Cookies",
            },
            {
              id: 3,
              name: "Oatmeal Raisin Cookie",
              description:
                "Traditional flavors of cinnamon, oatmeal and sweet raisins.",
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
      "Dilac Vegan Vietnamese Cuisine": [
        {
          name: "Pho",
          items: [
            {
              id: 1,
              name: "Vegan Pho",
              description:
                "Traditional Vietnamese noodle soup with vegan broth and vegetables.",
              category: "Pho",
            },
            {
              id: 2,
              name: "Tofu Pho",
              description: "Pho with tofu slices and fresh herbs.",
              category: "Pho",
            },
          ],
        },
        {
          name: "Spring Rolls",
          items: [
            {
              id: 1,
              name: "Vegan Spring Rolls",
              description:
                "Rice paper rolls filled with fresh vegetables and tofu, served with dipping sauce.",
              category: "Spring Rolls",
            },
            {
              id: 2,
              name: "Avocado Summer Rolls",
              description:
                "Summer rolls filled with avocado, cucumber, and other fresh vegetables.",
              category: "Spring Rolls",
            },
          ],
        },
        {
          name: "Noodle Bowls",
          items: [
            {
              id: 1,
              name: "Vegan Bun Cha",
              description:
                "Rice vermicelli noodle bowl with vegan protein and herbs.",
              category: "Noodle Bowls",
            },
            {
              id: 2,
              name: "Tofu Banh Mi Bowl",
              description:
                "Banh mi sandwich deconstructed into a bowl with tofu, pickled vegetables, and herbs.",
              category: "Noodle Bowls",
            },
          ],
        },
      ],
      "The Good Bowl - Traditional Bowls": [
        {
          name: "Curries",
          items: [
            {
              id: 1,
              name: "Paneer Tikka Masala",
              description:
                "Paneer cooked in a rich tomato-based gravy with spices.",
              category: "Curries",
            },
            {
              id: 2,
              name: "Butter Chicken",
              description:
                "Tender chicken cooked in a creamy tomato-based sauce with butter and spices.",
              category: "Curries",
            },
            {
              id: 3,
              name: "Chana Masala",
              description:
                "Chickpeas cooked with onions, tomatoes, and spices.",
              category: "Curries",
            },
          ],
        },
        {
          name: "Biryani",
          items: [
            {
              id: 1,
              name: "Vegetable Biryani",
              description:
                "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
              category: "Biryani",
            },
            {
              id: 2,
              name: "Chicken Biryani",
              description:
                "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.",
              category: "Biryani",
            },
          ],
        },
        {
          name: "Breads",
          items: [
            {
              id: 1,
              name: "Naan",
              description: "Traditional Indian flatbread baked in a tandoor.",
              category: "Breads",
            },
            {
              id: 2,
              name: "Garlic Naan",
              description: "Naan bread topped with minced garlic and cilantro.",
              category: "Breads",
            },
          ],
        },
      ],
      "Swap - Diet Meal Box": [
        {
          name: "Fruit Superfood Bowl",
          items: [
            {
              id: 1,
              name: "Acai Bowl",
              description:
                "Acai berries blended with banana and topped with granola, fruits, and honey.",
              category: "Fruit Superfood Bowl",
            },
            {
              id: 2,
              name: "Mixed Berry Smoothie Bowl",
              description:
                "Mixed berries blended with yogurt and topped with assorted fruits and nuts.",
              category: "Fruit Superfood Bowl",
            },
            {
              id: 3,
              name: "Dragon Fruit Bowl",
              description:
                "Dragon fruit blended with coconut milk and topped with kiwi, mango, and chia seeds.",
              category: "Fruit Superfood Bowl",
            },
          ],
        },
        {
          name: "Protein Bowl",
          items: [
            {
              id: 1,
              name: "Quinoa and Black Bean Bowl",
              description:
                "Protein-packed quinoa and black beans mixed with avocado and salsa.",
              category: "Protein Bowl",
            },
            {
              id: 2,
              name: "Salmon and Brown Rice Bowl",
              description:
                "Grilled salmon served over brown rice with mixed greens and sesame dressing.",
              category: "Protein Bowl",
            },
            {
              id: 3,
              name: "Tofu and Veggie Stir-Fry",
              description:
                "Sautéed tofu and mixed vegetables tossed in a savory sauce.",
              category: "Protein Bowl",
            },
          ],
        },
        {
          name: "Salad",
          items: [
            {
              id: 1,
              name: "Greek Salad",
              description:
                "Classic Greek salad with tomatoes, cucumbers, olives, and feta cheese.",
              category: "Salad",
            },
            {
              id: 2,
              name: "Caesar Salad",
              description:
                "Fresh romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
              category: "Salad",
            },
            {
              id: 3,
              name: "Spinach and Strawberry Salad",
              description:
                "Baby spinach topped with sliced strawberries, almonds, and balsamic vinaigrette.",
              category: "Salad",
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
            alt={restaurantInfo.davidAndEmilysPatisserie}
          />
          <div className="restaurant-details">
            <div className="restaurant-name">
              <h2>{restaurantInfo.davidAndEmilysPatisserie}</h2>
            </div>
            <div className="french-patisserie">
              <p>{restaurantInfo.frenchPatisserie}</p>
            </div>
            <div className="info-container">
              <div className="rating">
                <img alt="" src="/vector-2.svg" />
                <p>{restaurantInfo.prop}</p>
              </div>
              <div className="delivery-time">
                <p>{restaurantInfo.mins} Delivery Time</p>
              </div>
              <div className="cost">
                <p>{restaurantInfo.prop1}</p>
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
              <p>{restaurantInfo.offer}</p>
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
              {restaurantInfo.davidAndEmilysPatisserie}
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

export default FoodItemPage;
