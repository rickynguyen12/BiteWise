import React, { useState, useEffect } from "react";
import SearchedComponent from "./SearchedComponent";
import Button from "@mui/material/Button";
import "./SearchedGroupComponent.css";
import axios from 'axios';

const SearchedGroupComponent = ({searchQuery}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedButton, setSelectedButton] = useState("Items");
  // const [queryResults, setQueryResults] = useState([preInitSearchResults]);
  
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  // Fetch Search results based on searchQuery
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/search-query', {
          params: {
            query: searchQuery}, // Bobs Burgers
        });
        setSearchResults(response.data)
      } catch (error) {
          console.error('Error sending search request:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery])

  return (
    <section className="homepage-child">
      <div className="frame-parent14">
        <div className="personalized-recommendations-parent">
          <h3 className="personalized-recommendations">
            Search results for "{searchQuery}"
          </h3>
          <div className="search-result-buttons">
            <Button
              variant="contained"
              className="search-result-button"
              style={{
                backgroundColor:
                  selectedButton === "Items" ? "#307651" : "transparent",
                color: selectedButton === "Items" ? "white" : "black",
              }}
              onClick={() => setSelectedButton("Items")}
            >
              Items
            </Button>
            <Button
              variant="contained"
              className="search-result-button"
              style={{
                backgroundColor:
                  selectedButton === "Restaurants" ? "#307651" : "transparent",
                color: selectedButton === "Restaurants" ? "white" : "black",
              }}
              onClick={() => setSelectedButton("Restaurants")}
            >
              Restaurants
            </Button>
          </div>
          <div className="searched-group-component">
            {searchResults.map((result) => (
              <SearchedComponent
                image="/bowl1.png"
                itemName={result.merchantname}
                restaurantName={result.category}
                deal="10% off"
                mins="20 Mins"
                propAlignSelf="unset"
                propWidth="307px"
                propPadding="36px 27px 25px"
                propAlignSelf1="stretch"
                propHeight="unset"
                propMinWidth="unset"
                propMinWidth1="21px"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchedGroupComponent;
