import React, { useState, useEffect } from 'react';
import { TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./OwnerViewProfile.css";
import axios from 'axios';

const OwnerViewProfile = () => {
  // Assuming you have owner details stored in state
  const [ownerDetails, setOwnerDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  // State to manage the visibility of owner details
  const [showDetails, setShowDetails] = useState(true);

  // Function to fetch owner details, you may need to implement it according to your backend logic
  useEffect(() => {
    const fetchOwnerDetails = async (e) => {
      try{
        const merch_email= localStorage.getItem('restaurant_id');
        const response = await axios.get(`http://localhost:8080/${merch_email}`);

        const { username,
          merchantname,
          email,
          phone,
        } = response.data;
        
        setOwnerDetails({
          Username: username,
          Merchantname: merchantname,
          Email: email,
          Phone: phone,
        });

        

      } catch(error){
        console.error(error);
      }
    };

    fetchOwnerDetails();
  }, []);

  // Function to toggle the visibility of owner details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="register-as-store-owner17">
      <section className="store-registration17">
        <div className="subtract-button-parent17">
          <FrameComponent4 />
          <div className="business-registration-parent17">
            <header className="business-registration17">
              <h2 className="register-business17">Business Profile</h2>
            </header>
            <div className="owner-details-box17">
              {/* Owner Details */}
              <div className="owner-details-content17">
                <h2 className="owner-details17">Owner Details</h2>
                <div style={{ display: showDetails ? 'block' : 'none' }}>
                  <p><strong>Business Name:</strong> {ownerDetails.merchantName}</p>
                  <p><strong>Phone Number:</strong> {ownerDetails.phoneNumber}</p>
                  <p><strong>Email:</strong> {ownerDetails.email}</p>
                </div>
              </div>
              {/* End Owner Details */}
            </div>
            {/* Toggle button */}
            <div className="toggle-details-button17">
              <Button
                className="sign-in317"
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
                onClick={toggleDetails}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default OwnerViewProfile;
