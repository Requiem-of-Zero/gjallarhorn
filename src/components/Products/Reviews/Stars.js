import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  return (
    <ul className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <li>
            <label key={`rating_star-${i}`}>
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingVal}
              />
              <FaStar color={ratingVal <= rating ? "#ffc107" : "#e4e5e9"} />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Stars;
