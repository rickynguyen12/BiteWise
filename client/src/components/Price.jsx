// Stars.jsx

import "./Price.css";
import { useState } from "react";

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "$";
const DEFAULT_UNSELECTED_COLOR = "grey";
const DEFAULT_COLOR = "green";

export default function Price({ count, defaultRating, icon, color, iconSize }) {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

  const handleClick = (rating) => {
    setRating(rating);
    localStorage.setItem("priceRating", rating);
  };

  return (
    <div className="priceContainer">
      {stars.map((item, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);

        let elementColor = "";

        if (isActiveColor) {
          elementColor = color || DEFAULT_COLOR;
        } else {
          elementColor = DEFAULT_UNSELECTED_COLOR;
        }

        return (
          <div
            className="price"
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "30px",
              color: elementColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : DEFAULT_ICON}
          </div>
        );
      })}
    </div>
  );
}