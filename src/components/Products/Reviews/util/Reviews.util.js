import { db } from "../../../../firebase.config";
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

const getProductReviews = async (productId, setReviews, setFetchLoading) => {
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

    setReviews(reviews);
  } catch (error) {
    console.log("getProductReviews error", error);
  }
  setFetchLoading(false);
};

export { getProductReviews };
