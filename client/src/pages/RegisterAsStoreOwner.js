import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Footer from "../components/Footer";
import "./RegisterAsStoreOwner.css";

const RegisterAsStoreOwner = () => {
  return (
    <div className="register-as-store-owner">
      <section className="store-registration">
        <div className="subtract-button-parent">
          <div className="subtract-button">
            <div className="bite-wise-label">
              <div className="search-bar">
                <img
                  className="subtract-icon1"
                  loading="lazy"
                  alt=""
                  src="/subtract1.svg"
                />
              </div>
              <h1 className="bitewise1">BiteWise</h1>
            </div>
            <div className="image-placeholder">
              <TextField
                className="image-placeholder-child"
                placeholder="Enter item or restaurant you are looking for"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="19px" height="19px" src="/vector.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#808080" },
                  "& .MuiInputBase-root": {
                    height: "49px",
                    backgroundColor: "#fff",
                    paddingRight: "25px",
                    borderRadius: "10px",
                  },
                  "& .MuiInputBase-input": { color: "#808080" },
                }}
              />
              <div className="category-field">
                <div className="bag1">
                  <img className="vector-icon" alt="" src="/vector-1.svg" />
                  <div className="bag-child" />
                </div>
              </div>
              <Button
                className="sign-in2"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fdfbfa",
                  fontSize: "14",
                  background: "#202020",
                  borderRadius: "10px",
                  "&:hover": { background: "#202020" },
                  width: 96,
                  height: 49,
                }}
              >
                Sign In
              </Button>
            </div>
            <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
          </div>
          <div className="business-registration-parent">
            <header className="business-registration">
              <h2 className="register-business">Register Business</h2>
            </header>
            <div className="phone-number-input">
              <form className="state-zipcode-fields">
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
                        className="frame-child"
                        placeholder="Business Name"
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
                </div>
                <div className="frame-div">
                  <div className="frame-parent1">
                    <div className="owner-details-wrapper">
                      <h2 className="owner-details">Owner Details</h2>
                    </div>
                    <div className="last-name-input">
                      <TextField
                        className="phone-number-input1"
                        placeholder="First Name"
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
                        className="last-name-input-child"
                        placeholder="Last Name"
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
                  </div>
                  <div className="phone-number-email-parent">
                    <TextField
                      className="phone-number-email"
                      placeholder="Phone Number"
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
                      placeholder="Email"
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
