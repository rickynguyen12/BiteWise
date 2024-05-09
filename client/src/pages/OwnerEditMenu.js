import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import Footer from "../components/Footer";
import "./OwnerEditMenu.css";
import axios from "axios";

const OwnerEditMenu = () => {
  //const [ownerDetails, setOwnerDetails] = useState([]);

  const [menuData, setMenuData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const restaurantId = localStorage.getItem('restaurant_id'); // Replace with your actual restaurant ID
        const response = await axios.get(
          `http://localhost:8080/menu/get/${restaurantId}`
        );

        console.log(response.data);

        const uniqueCategories = Array.from(
          new Set(response.data.map((item) => item.category))
        );

        // Set categories state to the array of unique categories
        setCategories(uniqueCategories);
        setMenuData(response.data);
        setSelectedCategory(response.data.menuItems[0]?.category || "");
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  //const navigate = useNavigate();

  const handleEditItemClick = (restaurantId, itemId) => {
    navigate(`/owner-edit-item`, { state: { restaurantId, itemId } }); // need to update to /owner-edit-item/itemId to retrieve correct item details
  };

  const handleAddClick = () => {
    navigate(`/owner-add-to-menu`);
  };

  const handleDeleteItemClick = async (restaurant_id, itemId) => {
    try {
      await axios.delete(
        `http://localhost:8080/menu/remove/${restaurant_id}/${itemId}`
      );
      // Assuming the response contains updated menu items after deletion
      // Update menuData state with the updated menu items
      // Make sure to replace setMenuData with the correct state setter for menuData
      // You might also need to fetch the updated menu items again from the server if necessary
      // Example: fetchMenuData();
      const response = await axios.get(
        `http://localhost:8080/menu/get/${restaurant_id}`
      );
      setMenuData(response.data);
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  return (
    <div className="edit-menu">
      <FrameComponent4 />
      <div className="edit-menu-parent">
        <header className="edit-menu2">
          <h2 className="edit-menu1">Edit Menu</h2>
        </header>
      </div>
      <div className="edit-menu-page">
        <div className="menu-categories">
          <div className="menu-details">
            {menuData.length > 0 && (
              <h2>Restaurant ID: {menuData[0].restaurant_id}</h2>
            )}
            <div className="add-new">
              <Button
                onClick={handleAddClick}
                variant="contained"
                className="add-menu-button"
                sx={{
                  borderRadius: "10px",
                }}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="restaurant-menu">
            {categories.map((categoryData) => (
              <button
                key={categoryData}
                className={`category-button ${
                  selectedCategory === categoryData ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(categoryData)}
              >
                {categoryData}
              </button>
            ))}
          </div>
          <hr className="category-divider" />
        </div>
        <div className="menu-items">
          {selectedCategory && (
            <div>
              {menuData
                .filter((category) => category.category === selectedCategory)
                .map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="two-buttons">
                      <Button
                        onClick={() =>
                          handleEditItemClick(item.restaurant_id, item.id)
                        }
                        variant="contained"
                        className="edit-button"
                      >
                        Edit Item
                      </Button>
                      <Button
                        onClick={() =>
                          handleDeleteItemClick(item.restaurant_id, item.id)
                        }
                        variant="contained"
                        className="delete-button"
                      >
                        Delete Item
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="dashboard-footer">
        <Footer propHeight="20.9px" propHeight1="24px" />
      </div>
    </div>
  );
};

export default OwnerEditMenu;
