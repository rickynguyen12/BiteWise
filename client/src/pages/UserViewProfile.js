import React, { useState, useEffect } from 'react';
import { TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./OwnerViewProfile.css";

const UserViewProfile = () => {
  // Assuming you have owner details stored in state
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  // State to manage the visibility of owner details
  const [showDetails, setShowDetails] = useState(true);

  // Function to fetch owner details, you may need to implement it according to your backend logic
  const fetchUserDetails = () => {
    // Fetch owner details from backend or any data source
    // Update the owner details state with fetched data
    const fetchedOwnerDetails = {
      merchantName: "Bob's Burgers",
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com'
    };
    setUserDetails(fetchedOwnerDetails);
  };

  // Fetch owner details on component mount
  useEffect(() => {
    fetchUserDetails();
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
              <h2 className="register-business17">User Profile</h2>
            </header>
            <div className="owner-details-box17">
              {/* Owner Details */}
              <div className="owner-details-content17">
                <h2 className="owner-details17">User Details</h2>
                <div style={{ display: showDetails ? 'block' : 'none' }}>
                  <p><strong>First Name:</strong> {userDetails.firstName}</p>
                  <p><strong>last Name:</strong> {userDetails.lastName}</p>
                  <p><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
                  <p><strong>Email:</strong> {userDetails.email}</p>
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

export default UserViewProfile;
