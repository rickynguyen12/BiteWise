import { Button } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent6a from "../components/FrameComponent6a";
import "./RedirectPageToFoodDelivery.css";

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useSearchParams } from "react-router-dom";

const RedirectPageToFoodDelivery2 = () => {
  const navigate = useNavigate();
  const [searchedParams, setSearchParams] = useSearchParams();
  const [searchedRestuarants, setSearchResults] = useState([]);
  console.log("Clicked Restuarant: ", searchedParams.get("merchant"))
  const [offAppRest] = useState([]) // change the sorting of this based on filter options

  // Fetch Search results based on searchQuery
  useEffect(() => {
    const searchQuery = searchedParams.get("merchant")
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/checkout-merchants', {
          params: {
            query: searchQuery}, // Bobs Burgers
        });
        setSearchResults(response.data)
        response.data.forEach(item => {
          if(!item.in_App) {
            offAppRest.push(item)
          }
        })
      } catch (error) {
          console.error('Error sending search request:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchedParams])

  return (
    <div className="redirect-page-to-food-deliverys">
      <FrameComponent4 />
      <div className="redirect-header-frame">
        <header className="redirect-header">
          <h3 className="view1">Compare Prices</h3>
        </header>
      </div>
      <section className="frame-parents-compare-prices">
        <div className="frame-groups">
          <GroupComponent2 />
          <div className="frame-list">
            {searchedRestuarants && offAppRest.map((rest, index) => (
              <FrameComponent6a 
                key={index}
                id={rest.restaurant_id}
                name={rest.merchantname}
                circleImage={rest.logo_url}
                distance="2.95 mi"
                rating="/group-98.png"
                price="/group-95.png"
                features={[rest.category]}
                icon="/pickup-black.png"
                deliveryService="Uber Eats"
                deliveryFee="$0.59"
                estimatedTime="15 min"
              />
            ))}
          </div>
        </div>
      </section>
      <div className="view-more-button-wrappers">
        <h2 className="view-more-buttons">End of Results</h2>
      </div>
    </div>
  );
};

export default RedirectPageToFoodDelivery2;
