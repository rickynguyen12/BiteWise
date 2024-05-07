import { Button } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent6a from "../components/FrameComponent6a";
import "./RedirectPageToFoodDelivery.css";

const RedirectPageToFoodDelivery2 = () => {
  const restaurants = [
    {
      name: "David and Emily’s Patisserie",
      circleImage: "david-circle.png",
      distance: "2.04 mi",
      rating: "/group-98.png",
      price: "/group-95.png",
      features: ["French", "Bakery", "Good for Breakfast", "Local Eats"],
      icon: "/pickup-black.png",
      deliveryService: "Uber Eats",
      deliveryFee: "$0.49",
      estimatedTime: "35 min",
      numOfDeals: "5",
    },
    {
      name: "Dilac Vegan Vietnamese Cuisine",
      circleImage: "dilac-circle.png",
      distance: "3.28 mi",
      rating: "/group-98-1.png",
      price: "/group-95.png",
      features: ["Vietnamese", "Vegan", "Good for Dinner", "Family Business"],
      icon: "/delivery-and-pickup.png",
      deliveryService: "DoorDash",
      deliveryFee: "$0.99",
      estimatedTime: "30 min",
      numOfDeals: "4",
    },
    {
      name: "Mexican Signature Wraps",
      circleImage: "mexican-circle.png",
      distance: "2.95 mi",
      rating: "/group-98.png",
      price: "/group-95.png",
      features: ["Mexican", "On-the-go", "Good for Lunch"],
      icon: "/pickup-black.png",
      deliveryService: "Uber Eats",
      deliveryFee: "$0.59",
      estimatedTime: "20 min",
      numOfDeals: "3",
    },
  ];

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
            {restaurants.map((restaurant, index) => (
              <FrameComponent6a key={index} {...restaurant} />
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
