import React, { useState } from "react";
import SearchedComponent from "./SearchedComponent";
import Button from "@mui/material/Button";
import "./SearchedGroupComponent.css";

const SearchedGroupComponent = () => {
  const [selectedButton, setSelectedButton] = useState("Items");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <section className="homepage-child">
      <div className="frame-parent14">
        <div className="personalized-recommendations-parent">
          <h3 className="personalized-recommendations">
            Search results for "Rice Bowls"
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
            <SearchedComponent
              image="/bowl6.png"
              itemName="Paneer Tikka Rice Bowl"
              restaurantName={`The Good Bowl`}
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
            <SearchedComponent
              image="/bowl1.png"
              itemName="Dal Fry Rice Bowl - Fried With Ghee"
              restaurantName={`The Good Bowl`}
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
            <SearchedComponent
              image="/bowl2.png"
              itemName="Butter Paneer Rice Bowl Large"
              restaurantName={`The Good Bowl`}
              deal="$5 off"
              mins="20 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="36px 27px 25px"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="unset"
              propMinWidth1="21px"
            />
            <SearchedComponent
              image="/bowl3.png"
              itemName="Paneer Signature Rice Bowl (Regular)"
              restaurantName={`Fasso - Wraps & Bowls`}
              deal="No Deal"
              mins="15 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="36px 27px 25px"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="unset"
              propMinWidth1="21px"
            />
            <SearchedComponent
              image="/bowl4.png"
              itemName="Chicken Signature Rice Bowl"
              restaurantName={`Fasso - Wraps & Bowls`}
              deal="No Deal"
              mins="15 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="36px 27px 25px"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="unset"
              propMinWidth1="21px"
            />
            <SearchedComponent
              image="/bowl5.png"
              itemName="Royal Chicken Rice Bowl (Jumbo)"
              restaurantName={`Fasso - Wraps & Bowls`}
              deal="5% off"
              mins="15 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="36px 27px 25px"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="unset"
              propMinWidth1="21px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchedGroupComponent;
