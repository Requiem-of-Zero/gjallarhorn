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
import { Skeleton } from "@mui/material";
import { getProductReviews, onCreateReview } from "./util/Reviews.util";

const Reviews = ({ user, product, productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const [loadingDeleteId, setLoadingDeleteId] = useState('');
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(reviews)
  const onDeleteReview = async (review) => {
    setLoadingDeleteId(review.id)
    try {
      const batch = writeBatch(db);
      const reviewDocRef = doc(db, 'reviews', review.id)
      batch.delete(reviewDocRef);
      await batch.commit();

      setReviews(prev => prev.filter(item => item.id !== review.id))
    } catch (error) {
      console.log('onDeleteReview error', error)
    }
    setLoadingDeleteId('');
  };

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

  useEffect(() => {
    if (!product) return;
    getProductReviews(productId, setReviews, setFetchLoading);
  }, [product]);

  return (
    <div className="text-white mt-10 px-4">
      <div className="flex flex-col text-xl w-[100%]">
        {!fetchLoading && (<ReviewInput
          productId={productId}
          product={product}
          setReviews={setReviews}
          reviewText={reviewText}
          setReviewText={setReviewText}
          user={user}
          createLoading={createLoading}
          setCreateLoading={setCreateLoading}
          onCreateReview={onCreateReview}
          setRating={setRating}
          hover={hover}
          setHover={setHover}
          rating={rating}
        />)}
      </div>
      <div id="reviews">
        {fetchLoading ? (
          [0, 1, 2].map((item, i) => (
            <Skeleton animation="wave" key={`skeleton_loader-${i}`} />
          ))
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
                    loadingDelete={loadingDeleteId === review.id}
                    userId={user.uid}
                    user={user}
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
