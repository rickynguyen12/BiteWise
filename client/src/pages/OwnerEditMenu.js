import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { menuData } from "./MenuData";
import FrameComponent4 from "../components/FrameComponent4";
import Footer from "../components/Footer";
import "./OwnerEditMenu.css";
import axios from "axios";

const OwnerEditMenu = () => {
  const [ownerDetails, setOwnerDetails] = useState([]);

  useEffect(() => {
    async function addMenuItems() {
      const response = await axios
        .post("https://localhost:8080/menu/add/:restaurant_id")
        .then((res) => {
          setOwnerDetails([...res.data]);
        });
    }
    addMenuItems();
  }, []);

  useEffect(() => {
    async function updateMenuItems() {
      const response = await axios
        .put("https://localhost:8080/menu/update/:restaurant_id/:id")
        .then((res) => {
          setOwnerDetails([...res.data]);
        });
    }
    updateMenuItems();
  }, []);

  //temp hardcoded owner details
  const ownerMenuData = menuData[ownerDetails.restaurantName];

  const [selectedCategory, setSelectedCategory] = useState(
    menuData[ownerDetails.restaurantName][0]?.name || []
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const navigate = useNavigate();

  const handleEditItemClick = (itemId) => {
    navigate(`/owner-edit-item`); // need to update to /owner-edit-item/itemId to retrieve correct item details
  };

  const handleAddClick = () => {
    navigate(`/owner-add-to-menu`);
  };

  const handleDeleteItemClick = (itemId) => {};

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
            <h2>{ownerDetails.restaurantName}</h2>
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
            {ownerMenuData.map((categoryData) => (
              <button
                key={categoryData.name}
                className={`category-button ${
                  selectedCategory === categoryData.name ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(categoryData.name)}
              >
                {categoryData.name}
              </button>
            ))}
          </div>
          <hr className="category-divider" />
        </div>
        <div className="menu-items">
          {selectedCategory && (
            <div>
              {ownerMenuData
                .find((category) => category.name === selectedCategory)
                .items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="two-buttons">
                      <Button
                        onClick={() => handleEditItemClick(item.id)}
                        variant="contained"
                        className="edit-button"
                      >
                        Edit Item
                      </Button>
                      <Button
                        onClick={() => handleDeleteItemClick(item.id)}
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
