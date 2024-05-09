import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import Axios
import "./RegisterAsStoreOwner.css";
import FrameComponent4 from "../components/FrameComponent4";


const RegisterAsStoreOwner = () => {
  const [formData, setFormData] = useState({
    merchantname: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    category: "",
    logo_url: "",
    in_App: true,
    username: "",
    email: "",
    password: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/merchant/register",
        formData
      );
      console.log("Signup Successful:", response.data);
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after a delay
      }, 2000);
    } catch (error) {
      console.error("Signup Failed:", error);

      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    }
  };

  const navigate = useNavigate();
  const onSignInClick = () => {
    navigate("/login");
  };

  const onCartClick = () => {
    navigate("/cart");
  };

  const onLogoContainerClick = () => {
    navigate("/");
  };

  return (
    <div className="register-as-store-owner">
      <section className="store-registration">
        <div className="subtract-button-parent">
          <FrameComponent4 />
          <div className="redirect-header-frame">
            <header className="redirect-header">
              <h3 className="cart1">Register Business</h3>
            </header>
          </div>
          <div className="business-registration-parent">
            <div className="phone-number-input">
              <form className="state-zipcode-fields" onSubmit={handleSubmit}>
                <div className="state-zipcode-fields-child" />
                <div className="state-zipcode-fields-item" />
                <div className="state-zipcode-fields-inner" />
                <div className="state-input">
                  <div className="zipcode-input">
                    <div className="email-input-field">
                      <h2 className="add-business">Add Business</h2>
                    </div>
                    <div className="frame-container">
                      <TextField
                        className="frame-child-name"
                        placeholder="Business Name"
                        onChange={handleChange}
                        name='merchantname'
                        value={formData.merchantname}
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
                        name='phone'
                        onChange={handleChange}
                        value={formData.phone}
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
                      name='streetAddress'
                      onChange={handleChange}
                      value={formData.streetAddress}
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
                          name='city'
                          onChange={handleChange}
                          variant="outlined"
                          value={formData.city}
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
                        name='state'
                        onChange={handleChange}
                        variant="outlined"
                        value={formData.state}
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
                        name='zipCode'
                        onChange={handleChange}
                        variant="outlined"
                        value={formData.zipCode}
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
                      name='category'
                      onChange={handleChange}
                      variant="outlined"
                      value={formData.category}
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
                      className="city-input1"
                      placeholder="Logo Image URL"
                      name='logo_url'
                      onChange={handleChange}
                      variant="outlined"
                      value={formData.logo_url}
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
                </div>
                <div className="frame-divv">
                  <div className="frame-parent12">
                    <div className="owner-details-wrapper">
                      <h2 className="owner-details">Owner Details</h2>
                    </div>
                    <div className="last-name-input">
                      <TextField
                        className="phone-number-input1"
                        placeholder="First Name"
                        name='firstname'
                        onChange={handleChange}
                        variant="outlined"
                        value={formData.firstname}
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
                        className="last-name-input-child"
                        placeholder="Last Name"
                        name='lastname'
                        onChange={handleChange}
                        variant="outlined"
                        value={formData.lastname}
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
                  </div>
                  <div className="phone-number-email-parent">
                    <TextField
                        className="phone-number-email"
                        placeholder="Username"
                        name='username'
                        onChange={handleChange}
                        value={formData.username}
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
                    <TextField
                      className="phone-number-email"
                      placeholder="Email"
                      name='email'
                      onChange={handleChange}
                      value={formData.email}
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
                    <TextField
                      className="phone-number-email1"
                      placeholder="Password"
                      variant="outlined"
                      onChange={handleChange}
                      name="password"
                      value = {formData.password}
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
                  <div className="sign-in-wrapper">
                    <Button
                      type='submit'
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
                      Add Business
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

export default RegisterAsStoreOwner;
