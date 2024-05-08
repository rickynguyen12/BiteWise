import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./RegisterAsStoreOwner.css";
import "./OwnerAddToMenu.css";
import axios from "axios";

const OwnerAddToMenu = () => {
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
  return (
    <div className="register-as-store-owner">
      <section className="store-registration">
        <div className="subtract-button-parent">
          <FrameComponent4 />
          <div className="business-registration-parent">
            <header className="business-registration">
              <h2 className="register-business">Add To Menu</h2>
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
                <div className="frame-divv">
                  <div className="sign-in-wrapper">
                    <Button
                      className="sign-in3"
                      disableElevation={true}
                      variant="contained"
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
                      Add Item
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="category-input">
              <form className="state-zipcode-fields">
                <div className="state-input">
                  <div className="zipcode-input">
                    <div className="email-input-field">
                      <h2 className="add-business">Category</h2>
                    </div>
                    <div className="phone-number-email-parent">
                      <TextField
                        className="phone-number-email1"
                        placeholder="Category Name"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#1ac84b" },
                          "& .MuiInputBase-root": {
                            height: "54px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#808080" },
                        }}
                      />
                    </div>
                    <div className="add-category-wrapper">
                      <Button
                        className="sign-in3"
                        disableElevation={true}
                        variant="contained"
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
                        Add Category
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default OwnerAddToMenu;
