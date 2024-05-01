import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import FrameComponent4 from '../components/FrameComponent4';
import SignalProcessor from '../components/SignalProcessor';
import FrameComponent1 from '../components/FrameComponent1';
import GroupComponent from '../components/GroupComponent';
import FrameComponent from '../components/FrameComponent';
import Footer from '../components/Footer';
import './Homepage.css';

const Homepage = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          axios.post('http://localhost:8080/api/locations', { // hardcoded landing for now
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }).then((response) => {
            console.log('Location saved:', response.data);
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="homepage">
      <img
        className="union-icon"
        loading="lazy"
        alt=""
        src="/union@2x.png"
      />
      <FrameComponent4 />
      <SignalProcessor />
      <FrameComponent1 />
      <GroupComponent />
      <FrameComponent />
      <Footer />
      {userLocation && (
        <div>
          Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
        </div>
      )}
    </div>
  );
};

export default Homepage;
