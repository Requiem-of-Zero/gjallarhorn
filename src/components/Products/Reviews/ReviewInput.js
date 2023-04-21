import { useState } from "react";
import { FaStar } from "react-icons/fa";
import MultilineTextFields from "./Textfield";
import { CircularProgress } from "@mui/material";

const ReviewInput = ({
  reviewText,
  setReviewText,
  user,
  createLoading,
  onCreateReview,
  setRating,
  hover,
  setHover,
  rating,
}) => {
  return (
    <div>
      <div className="flex pl-4">
        {[...Array(5)].map((star, i) => {
          const ratingVal = i + 1;
          return (
            <label key={`rating_star-${i}`}>
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingVal}
                onClick={() => setRating(ratingVal)}
              />
              <FaStar
                className="cursor-pointer"
                color={ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingVal)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
        <MultilineTextFields
          setReviewText={setReviewText}
          reviewText={reviewText}
          user={user}
          onCreateReview={onCreateReview}
          createLoading={createLoading}
        />
    </div>
  );
};

export default ReviewInput;
