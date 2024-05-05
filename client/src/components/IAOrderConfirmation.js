import {
    Select,
    MenuItem,
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
} from "@mui/material";
import Footer from "../components/Footer";
import "../pages/IACustomerCheckout.css";
import { useNavigate } from "react-router-dom";
import { LottiePlayer } from "@lottiefiles/lottie-player";



const IAOrderConfirmation = () => {
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
                    </div>
                </div>
                <div className="lottie-container">
                    <LottiePlayer
                        autoplay
                        loop
                        controls
                        mode="normal"
                        src="https://assets3.lottiefiles.com/packages/lf20_0bzW8w.json"
                        style={{ width: "320px" }}
                    />
                </div>
            </section>
            <Footer propHeight="20.9px" propHeight1="24px" />
        </div>
    );
}

export default IAOrderConfirmation;
