import {
    Select,
    MenuItem,
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./IACustomerCheckout.css";



const IACustomerCheckout = () => {

    // delivery address
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");

    // payment information
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [ccNum, setCCNum] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvvNum, setCVVNum] = useState("");

    // change handler functions
    const handleAddress1Change = (event) => {
        setAddress1(event.target.value);
    };

    const handleAddress2Change = (event) => {
        setAddress2(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleFNameChange = (event) => {
        setFName(event.target.value);
    };

    const handleLNameChange = (event) => {
        setLName(event.target.value);
    };

    const handleCCNumChange = (event) => {
        setCCNum(event.target.value);
    };

    const handleExpMonthChange = (event) => {
        setExpMonth(event.target.value);
    };

    const handleExpDateChange = (event) => {
        setExpDate(event.target.value);
    };

    const handleCVVNumChange = (event) => {
        setCVVNum(event.target.value);
    };


    const navigate = useNavigate();

    const onLogoContainerClick = () => {
        navigate("/");
    };

    return (
        <div className="register">
            <section className="register-inner">
                <div className="frame-parent">
                    <div className="frame-group">
                        <div className="logo-wrapper">
                            <div className="logo" onClick={onLogoContainerClick}>
                                <h2 className="bitewise">BiteWise</h2>
                                <img
                                    className="subtract-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/subtract1.svg"
                                />
                            </div>
                        </div>
                        <div className="first-name-field">
                            <TextField
                                className="last-name-field"
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
                            <div className="sign-in-instance">
                                <div className="bag">
                                    <img
                                        className="calorie-info-icon"
                                        alt=""
                                        src="/vector-1.svg"
                                    />
                                    <div className="delivery-info" />
                                </div>
                            </div>
                            <Button
                                className="sign-in"
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
                        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
                    </div>
                    <div className="first-parent">
                        <header className="register-wrapper">
                            <h3 className="register1">Secure Checkout</h3>
                        </header>
                        <div className="first-body">
                            <div className="checkout-form-wrapper">
                                <form className="checkout-form">
                                    <div className="delivery-payment-sections">
                                        <div className="delivery-payment-header">
                                            <img className="loc-icon" alt="" src="/location.svg" />
                                            <h5 className="create-your-account">Delivery Address</h5>
                                        </div>
                                        <div className="delivery-sub">
                                            <TextField
                                                className="street-address"
                                                placeholder="Address Line 1"
                                                variant="outlined"
                                                onChange={handleAddress1Change}
                                                required
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />
                                            <TextField
                                                className="street-address"
                                                placeholder="Address Line 2"
                                                variant="outlined"
                                                onChange={handleAddress2Change}
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />
                                            <div className="city-state-info">
                                                <TextField
                                                    className="city-field"
                                                    placeholder="City"
                                                    variant="outlined"
                                                    onChange={handleCityChange}
                                                    required
                                                    sx={{
                                                        "& fieldset": { borderColor: "#1ac84b" },
                                                        "& .MuiInputBase-root": {
                                                            height: "40px",
                                                            backgroundColor: "#fff",
                                                            borderRadius: "10px",
                                                        },
                                                        "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                    }}
                                                />
                                                <TextField
                                                    className="city-field"
                                                    placeholder="State"
                                                    variant="outlined"
                                                    onChange={handleStateChange}
                                                    required
                                                    sx={{
                                                        "& fieldset": { borderColor: "#1ac84b" },
                                                        "& .MuiInputBase-root": {
                                                            height: "40px",
                                                            backgroundColor: "#fff",
                                                            borderRadius: "10px",
                                                        },
                                                        "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                    }}
                                                />

                                                <TextField
                                                    className="street-address"
                                                    placeholder="Zip Code"
                                                    variant="outlined"
                                                    onChange={handleZipCodeChange}
                                                    required
                                                    sx={{
                                                        "& fieldset": { borderColor: "#1ac84b" },
                                                        "& .MuiInputBase-root": {
                                                            height: "40px",
                                                            width: "168px",
                                                            backgroundColor: "#fff",
                                                            borderRadius: "10px",
                                                        },
                                                        "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="delivery-payment-header">
                                        <img className="loc-icon" alt="" src="/card.svg" />
                                        <h5 className="create-your-account">Payment Information</h5>
                                    </div>
                                    <div className="delivery-sub">
                                        <img className="payments-img" alt="" src="/payments.svg" />
                                        <div className="payment-info">
                                            <TextField
                                                className="name-field"
                                                placeholder="First Name"
                                                variant="outlined"
                                                onChange={handleFNameChange}
                                                required
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",

                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />
                                            <TextField
                                                className="name-field"
                                                placeholder="Last Name"
                                                variant="outlined"
                                                onChange={handleLNameChange}
                                                required
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",

                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />
                                        </div>
                                        <TextField
                                            className="street-address"
                                            placeholder="Credit Card Number (xxxx xxxx xxxx xxxx)"
                                            variant="outlined"
                                            onChange={handleCCNumChange}
                                            required
                                            sx={{
                                                "& fieldset": { borderColor: "#1ac84b" },
                                                "& .MuiInputBase-root": {
                                                    height: "40px",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "10px",
                                                },
                                                "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                            }}
                                        />
                                        <div className="city-state-info">
                                            <TextField
                                                className="city-field"
                                                placeholder="Month"
                                                variant="outlined"
                                                onChange={handleExpMonthChange}
                                                required
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />
                                            <TextField
                                                className="city-field"
                                                placeholder="Day"
                                                variant="outlined"
                                                onChange={handleExpDateChange}
                                                required
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />

                                            <TextField
                                                className="street-address"
                                                placeholder="CVV"
                                                variant="outlined"
                                                onChange={handleCVVNumChange}
                                                required
                                                sx={{
                                                    "& fieldset": { borderColor: "#1ac84b" },
                                                    "& .MuiInputBase-root": {
                                                        height: "40px",
                                                        width: "168px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                    },
                                                    "& .MuiInputBase-input": { color: "#808080", height: '10px' },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="sign-in-parent">
                                        <Button
                                            className="sign-in1"
                                            disableElevation={true}
                                            variant="contained"
                                            sx={{
                                                textTransform: "none",
                                                marginTop: "25px",
                                                color: "#fff",
                                                fontSize: "14",
                                                background: "#307651",
                                                borderRadius: "10px",
                                                "&:hover": { background: "#307651" },
                                                height: 49,
                                            }}
                                        >
                                            Confirm Payment
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className="cart-wrapper">
                                <h3 className="cart-header">Cart</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer propHeight="20.9px" propHeight1="24px" />
        </div>
    );
}

export default IACustomerCheckout;