import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./RegisterAsStoreOwner.css";
import "./OwnerAddToMenu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OwnerAddToMenu = () => {
  const [ownerDetails, setOwnerDetails] = useState([]);
  const user = localStorage.getItem('username');
  const [id, setId] = useState("");

  const [name, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate()

  const handleNameChange = event => {
    setItemName(event.target.value);
  }

  const handlePriceChange = event => {
    setPrice(event.target.value);
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const handleCategoryChange = event => {
    setCategory(event.target.value)
  }

  const handleClick = async () => {
    if(id) {
      try {
        const response = await axios
          .post(`http://localhost:8080/menu/add/${id}`, {
            // having item_id be blank
            restaurant_id: id,
            name: name, // Pass 'name' to the backend
            price: price, // Similarly, you can pass 'price', 'description', 'category' as needed
            description: description,
            category: category
          })
        navigate("/owner-dashboard")
      } catch(error) {
        console.log(error)
    }
    }
  }

  useEffect(() => {
    async function addMenuItems() {
      if (user) {
        try {const response = await axios.get("http://localhost:8080/search-user", {
            params: {
              query: user}, // Bob
          })
          setId(response.data.restaurant_id);
        } catch(error) {
            console.log(error)
        }
      }
    }
    if(user) {
      addMenuItems();
    }
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
                        value={name}
                        onChange={handleNameChange}
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
                        value={price}
                        onChange={handlePriceChange}
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
                      value={description}
                      onChange={handleDescriptionChange}
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
                      value={category}
                      onChange={handleCategoryChange}
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
                      onClick={handleClick}
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
