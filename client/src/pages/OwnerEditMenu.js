import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import axios from "axios";
import { useMenuItemContext } from "../components/MenuItemContext"; // Import the MenuItemContext

const OwnerEditMenu = () => {
  const { state: menuItemState } = useMenuItemContext(); // Access the menu item context state

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (menuItemState.menuItem) {
      setItemName(menuItemState.menuItem.name);
      setPrice(menuItemState.menuItem.price);
      setDescription(menuItemState.menuItem.description);
      setCategory(menuItemState.menuItem.category);
    }
  }, [menuItemState.menuItem]);

  const handleUpdate = async () => {
    try {
      if (menuItemState.menuItem) {
        const updatedItem = {
          ...menuItemState.menuItem,
          name: itemName,
          price: price,
          description: description,
          category: category,
        };
        const response = await axios.put(
          `https://localhost:8080/menu/update/${updatedItem.restaurant_id}/${updatedItem.id}`,
          updatedItem
        );
        console.log("Menu item updated:", response.data);
      }
    } catch (error) {
      console.error("Error updating menu item:", error);
    }
  };

  return (
    <div className="register-as-store-owner">
      <section className="store-registration">
        <div className="subtract-button-parent">
          <FrameComponent4 />
          <div className="business-registration-parent">
            <header className="business-registration">
              <h2 className="register-business">Edit Menu</h2>
            </header>
            <div className="phone-number-input">
              <form className="state-zipcode-fields">
                <div className="state-input">
                  <div className="zipcode-input">
                    <div className="email-input-field">
                      <h2 className="add-business">Item</h2>
                    </div>
                    <div className="frame-container">
                      <TextField
                        className="frame-item"
                        placeholder="Item Name"
                        variant="outlined"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "47px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                      <TextField
                        className="frame-item"
                        placeholder="Price"
                        variant="outlined"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "49px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                    </div>
                    <TextField
                      className="city-input2"
                      placeholder="Description"
                      variant="outlined"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      sx={{
                        "& fieldset": { borderColor: "#1ac84b" },
                        "& .MuiInputBase-root": {
                          height: "200px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": { color: "#808080" },
                      }}
                    />
                    <TextField
                      className="city-input2"
                      placeholder="Category"
                      variant="outlined"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      sx={{
                        "& fieldset": { borderColor: "#1ac84b" },
                        "& .MuiInputBase-root": {
                          height: "200px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": { color: "#808080" },
                      }}
                    />
                  </div>
                </div>
                <div className="sign-in-wrapper">
                  <Button
                    className="sign-in3"
                    disableElevation={true}
                    variant="contained"
                    onClick={handleUpdate}
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#2f7c31",
                      borderRadius: "10px",
                      "&:hover": { background: "#2f7c31" },
                      width: 143,
                      height: 49,
                    }}
                  >
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default OwnerEditMenu;
