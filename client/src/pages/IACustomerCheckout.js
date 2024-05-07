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
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./IACustomerCheckout.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const IACustomerCheckout = () => {
    const taxRate = 0.0875;
    const deliveryFee = 5.50;

    const [cartData, setCartData] = useState({
        restaurantName: "David and Emily’s Patisserie",
        cartItems: [
            { id: 1, itemName: "Pain au Chocolat", quantity: 2, price: 4.99},
            { id: 2, itemName: "Plain Croissant", quantity: 1 , price: 6.99},
            { id: 3, itemName: "Chocolate Cake", quantity: 1 , price: 13.99},
        ],
    });

    const[itemTotal, setItemTotal] = useState(0);
    const[taxPrice, setTaxPrice] = useState(0);
    const[subtotal, setSubtotal] = useState(0);
    
    useEffect(() => {
        let totalPrice = 0.00;
        cartData.cartItems.forEach((item) => {
            totalPrice += item.quantity * item.price;
        });

        let taxes = totalPrice * taxRate;
        let subtotal = totalPrice + taxes + deliveryFee;

        setItemTotal(totalPrice.toFixed(2));
        setTaxPrice((taxes).toFixed(2));
        setSubtotal((subtotal).toFixed(2));
    }, [cartData.cartItems]);

    const handleSubmit = (form) => {
        // fill out route for backend
    }

    const handleQuantityChange = (itemId, newQuantity, type) => {
        
        const updatedCartItems = cartData.cartItems
            .map((item) => {
                if (item.id === itemId) {
                    const quantity = Math.max(0, newQuantity);
                    if (quantity === 0) {
                        return null;
                    }
                    return {
                        ...item,
                        quantity,
                    };
                }
                return item;
            })
            .filter(Boolean);

        setCartData((prevData) => ({
            ...prevData,
            cartItems: updatedCartItems,
        }));
    };

    const[formData, setFormData] = useState({
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        fname: "",
        lname: "",
        ccNum: "",
        expMonth: "",
        expDate: "",
        cvvNum: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    };


    const navigate = useNavigate();

    const onLogoContainerClick = () => {
        navigate("/");
    };

    return (
        <div className="register">
            <section className="register-inner">
                <div className="frame-parent">
                    <div className="frame-group" >
                        <div className="logo-wrapper" onClick={onLogoContainerClick}>
                            <div className="logo" onClick={onLogoContainerClick}>
                                <h2 className="bitewise">BiteWise</h2>
                                <img
                                    className="subtract-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/subtract1.svg"
                                    onClick={onLogoContainerClick}
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
                            <h3 className="register1">In App Checkout</h3>
                        </header>
                        <div className="first-body">
                            <div className="checkout-form-wrapper">
                                <form className="checkout-form" onSubmit={handleSubmit(this)}>
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
                                                name='address1'
                                                onChange={handleChange}
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
                                                name='address2'
                                                variant="outlined"
                                                onChange={handleChange}
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
                                                    name='city'
                                                    onChange={handleChange}
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
                                                    name='state'
                                                    onChange={handleChange}
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
                                                    name='zipcode'
                                                    onChange={handleChange}
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
                                                name='firstName'
                                                onChange={handleChange}
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
                                                name='lastName'
                                                onChange={handleChange}
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
                                            name='ccnum'
                                            onChange={handleChange}
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
                                                placeholder="Month (i.e. September)"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name='expmonth'
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
                                                placeholder="Year (i.e. 2024)"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name='expyear'
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
                                                name='cvvnum'
                                                onChange={handleChange}
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
                                            type='submit'
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
                                {cartData.cartItems.map((item) => (
                                    <div className='cart-item'>
                                        <div className='order-info'>
                                            <p className="item-name">{item.itemName}</p>
                                            <p className="cart-item-price">${item.price*item.quantity}</p>
                                        </div>
                                        <div className='quantity-btns'>
                                            <IconButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                                <RemoveIcon className='sub-btn' />
                                            </IconButton>
                                            <span className="item-quantity">
                                                {item.quantity}</span>
                                            <IconButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                <AddIcon className='add-btn' />
                                            </IconButton>
                                        </div>
                                    </div>
                                ))}
                                <div className='subtotal-div'>
                                    <div className='item-total-div'>
                                        <p className='label'>Item Total </p>
                                        <p className='value'> ${itemTotal}</p>
                                    </div>
                                    <div className='item-total-div'>
                                        <p className='label'>Taxes </p>
                                        <p className='taxprice-val'> ${taxPrice}</p>
                                    </div>
                                    <div className='item-total-div'>
                                        <p className='delivery-label'>Delivery Fee </p>
                                        <p className='delivery-val'> ${deliveryFee.toFixed(2)}</p>
                                    </div>
                                    <div className='total-price-div'>
                                        <h4 className='total-label'>Total </h4>
                                        <h4 className='total-value'> ${subtotal}</h4>
                                    </div>
                                   
                                </div>
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