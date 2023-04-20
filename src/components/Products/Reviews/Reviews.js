import {
  collection,
  doc,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import ReviewInput from "./ReviewInput";
import ReviewItem from "./ReviewItem";

const Reviews = ({ user, product, productId, username }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
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

      newReview.createdAt = { seconds: Date.now() / 1000 };

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
      <div id="reviews">
        {fetchLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {reviews.length === 0 ? (
              <div className="pl-4 mt-2">No Reviews Yet...</div>
            ) : (
              <>
                {reviews.map((review, i) => (
                  <ReviewItem
                    review={review}
                    key={`review_item-${i}`}
                    onDeleteReview={onDeleteReview}
                    loadingDelete={false}
                    userId={user.uid}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
