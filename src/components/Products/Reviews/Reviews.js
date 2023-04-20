import { useEffect, useState } from "react";
import ReviewInput from "./ReviewInput";
import {
  doc,
  collection,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase.config";

const Reviews = ({ user, product, productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  console.log(reviewText);
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
    <div className="text-white">
      <div className="flex flex-col pl-10 pr-4 mb-6 text-xl w-[100%]">
        <ReviewInput
          reviewText={reviewText}
          setReviewText={setReviewText}
          user={user}
          createLoading={createLoading}
          onCreateReview={onCreateReview}
        />
      </div>
    </div>
  );
};

export default Reviews;
