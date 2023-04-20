import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import ReviewInput from "./ReviewInput";
import ReviewItem from "./ReviewItem";

const Reviews = ({ user, product, productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
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

  const getProductReviews = async () => {
    try {
      const reviewsQuery = query(
        collection(db, "reviews"),
        where("productId", "==", productId),
        orderBy("createdAt", "desc")
      );
      const reviewDocs = await getDocs(reviewsQuery);
      const reviews = reviewDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(reviews)
    } catch (error) {
      console.log("getProductReviews error", error);
    }
    setFetchLoading(false);
  };

  useEffect(() => {
    if(!product) return
    getProductReviews();
  }, [product]);
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
