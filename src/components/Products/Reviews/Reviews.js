import {
  collection,
  doc,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import ReviewInput from "./ReviewInput";

const Reviews = ({ user, product, productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(reviewText)
  const onCreateReview = async () => {
    setCreateLoading(true);
    try {
      const batch = writeBatch(db);

      const reviewDocRef = doc(collection(db, "reviews"));

      const newReview = {
        productId,
        creatorId: user && user.uid,
        creatorDisplayText: user && user.email.split("@")[0],
        creatorPhotoURL: user && user.photoURL,
        reviewText,
        productName: product.name,
        createdAt: serverTimestamp(),
        rating,
      };

      batch.set(reviewDocRef, newReview);

      await batch.commit();
      setReviewText("");
      setReviews((prev) => [newReview, ...prev]);
    } catch (error) {
      console.log("onCreateReview error", error);
    }
    setCreateLoading(false);
  };

  const onDeleteReview = async (review) => {};

  const getProductReviews = async () => {};

  useEffect(() => {
    getProductReviews();
  }, []);
  return (
    <div className="text-white mt-10">
      <div className="flex flex-col text-xl w-[100%]">
        <ReviewInput
          reviewText={reviewText}
          setReviewText={setReviewText}
          user={user}
          createLoading={createLoading}
          onCreateReview={onCreateReview}
          setRating={setRating}
          hover={hover}
          setHover={setHover}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default Reviews;
