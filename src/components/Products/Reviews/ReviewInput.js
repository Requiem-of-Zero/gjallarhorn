import React from "react";

const ReviewInput = ({
  reviewText,
  setReviewText,
  user,
  createLoading,
  onCreateReview,
}) => {
  return (
    <div>
      <textarea
        className="text-[black]"
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Add a review"
      ></textarea>
      <button onClick={() => onCreateReview(reviewText)}>Create Review</button>
    </div>
  );
};

export default ReviewInput;
