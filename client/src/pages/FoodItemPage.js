import React from "react";
import Footer from "../components/Footer";
import FrameComponent4 from "../components/FrameComponent4";
import "./FoodItemPage.css";

const FoodItemPage = () => {
  const davidAndEmilysPatisserie = {
    name: "David and Emily's Patisserie",
    photo: "/rectangle-26@2x.png",
    rating: 4.2,
    deliveryTime: "15 mins",
    cost: "$$",
    menu: [
      {
        id: 1,
        name: "Plain Croissant",
        description: "Freshly baked croissant",
        price: "$5.00",
      },
      {
        id: 2,
        name: "Pain au Chocolat",
        description: "Buttery pastry with chocolate filling",
        price: "$5.50",
      },
    ],
  };

  return (
    <div className="food-item">
      <FrameComponent4 />
      <section className="food-item-inner">
        <div className="restaurant-info">
          <img
            className="restaurant-photo"
            src={davidAndEmilysPatisserie.photo}
            alt={davidAndEmilysPatisserie.name}
          />
          <div className="restaurant-details">
            <div className="restaurant-name">
              <h2>{davidAndEmilysPatisserie.name}</h2>
            </div>
            <div className="french-patisserie">
              <p>french patisserie</p>
            </div>
            <div className="info-container">
              <div className="rating">
                <img alt="" src="/vector-2.svg" />
                <p>{davidAndEmilysPatisserie.rating}</p>
              </div>
              <div className="delivery-time">
                <p>{davidAndEmilysPatisserie.deliveryTime} Delivery Time</p>
              </div>
              <div className="cost">
                <p>{davidAndEmilysPatisserie.cost}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="menu">
        <div className="menu-items">
          {davidAndEmilysPatisserie.menu.map((item) => (
            <div className="menu-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer propHeight="20.9px" propHeight1="24px" />
    </div>
  );
};

export default FoodItemPage;
