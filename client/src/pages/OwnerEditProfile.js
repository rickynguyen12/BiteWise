import { TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./RegisterAsStoreOwner.css";
import "./OwnerEditProfile.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const OwnerEditProfile = () => {
  const user = localStorage.getItem('username');
  const navigate = useNavigate()

  const [name, setItemName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZip] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("")

  const handleNameChange = event => {
    setItemName(event.target.value);
  }

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  }

  const handleStreetChange = event => {
    setStreet(event.target.value);
  }
  const handleCityChange = event => {
    setCity(event.target.value);
  }
  const handleStateChange = event => {
    setState(event.target.value);
  }
  const handleZipChange = event => {
    setZip(event.target.value);
  }
  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const [merchant, setMerchant] = useState();

  const handleClick = async () => {
    if(merchant) {
      try {
        const response = await axios
          .put(`http://localhost:8080/merchant/updateInfo/${merchant.restaurant_id}`, {
            // having item_id be blank
            merchantname: name, // Pass 'name' to the backend
            phone: phone, // Similarly, you can pass 'price', 'description', 'category' as needed
            streetAddress: street,
            city: city,
            state: state,
            zipCode: zipCode,
            category: category,
            email: category
          })
        navigate("/owner-dashboard")
      } catch(error) {
        console.log(error)
    }
    }
  }

  useEffect(() => {
    async function getOwnerProfile() {
      if (user) {
        try {
          const response = await axios.get("http://localhost:8080/search-user", {
            params: {
              query: user}
          })
          setMerchant(response.data);
          setItemName(response.data.merchantname)
          setPhone(response.data.phone)
          setStreet(response.data.streetAddress)
          setCity(response.data.city)
          setState(response.data.state)
          setZip(response.data.zipCode)
          setCategory(response.data.category)
          setEmail(response.data.email)
        } catch(error) {
            console.log(error)
        }
      }
    }
    if(user) {
      getOwnerProfile();
    }
  }, [user]);
  return (
    <div className="register-as-store-owner">
      <section className="store-registration">
        <div className="subtract-button-parent">
          <FrameComponent4 />
          <div className="business-registration-parent">
            <header className="business-registration">
              <h2 className="register-business">Business Profile</h2>
            </header>
            <div className="phone-number-input">
              <form className="state-zipcode-fields">
                <div className="state-zipcode-fields-child" />
                <div className="state-zipcode-fields-item" />
                <div className="state-zipcode-fields-inner" />
                <div className="state-input">
                  <div className="zipcode-input">
                    {/* <div className="delete-button">
                      <Button
                        className="delete"
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          width: 143,
                          height: 49,
                          borderRadius: "10px",
                        }}
                      >
                        Close Business
                      </Button>
                    </div> */}
                    <div className="email-input-field">
                      <h2 className="add-business">Business Details</h2>
                    </div>

                    <div className="frame-container">
                      <TextField
                        className="frame-child"
                        placeholder="Business Name"
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
                        placeholder="Business Phone Number"
                        value={phone}
                        onChange={handlePhoneChange}
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
                      className="city-input"
                      placeholder="Street Address"
                      value={street}
                      onChange={handleStreetChange}
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
                    <div className="calorie-calculator-label">
                      <div className="blog-label">
                        <TextField
                          className="subtract-icon2"
                          placeholder="City"
                          value={city}
                          onChange={handleCityChange}
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
                      </div>
                      <TextField
                        className="delivery-info-label"
                        placeholder="State"
                        value={state}
                        onChange={handleStateChange}
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
                          width: "173px",
                        }}
                      />
                      <TextField
                        className="delivery-info-label1"
                        placeholder="Zip code"
                        value={zipCode}
                        onChange={handleZipChange}
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
                          width: "173px",
                        }}
                      />
                    </div>
                    <TextField
                      className="city-input1"
                      placeholder="Category"
                      value={category}
                      onChange={handleEmailChange}
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
                      className="phone-number-email1"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
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
                </div>
                <div className="frame-divv">
                  <div className="frame-parent12">
                  </div>
                  <div className="phone-number-email-parent">
                  </div>
                  <div className="sign-in-wrapper">
                    <Button
                      className="sign-in3"
                      disableElevation={true}
                      variant="contained"
                      onClick={handleClick}
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

export default OwnerEditProfile;
