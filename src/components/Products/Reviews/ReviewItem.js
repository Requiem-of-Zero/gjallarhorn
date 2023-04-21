import moment from "moment";
import Image from "next/image";
import Stars from "./Stars";
import { CircularProgress } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { UserAuth } from "../../../context/AuthContext";
const ReviewItem = ({ review, onDeleteReview, loadingDelete, userId }) => {
  const { rating } = review;
  return (
    <div className="py-2">
      <div id="user_photo">
        <Image
          className="rounded-full"
          src={review.creatorPhotoURL}
          width={30}
          height={30}
        />
      </div>
      <div id="review_info" className="flex justify-between relative">
        <h3 className="font-bold">{review.creatorDisplayText}</h3>
        <div className="flex items-center">
          <p className="text-light-grey text-sm">
            {moment(new Date(review.createdAt.seconds * 1000)).fromNow()}
          </p>
          {review.creatorId === userId && !loadingDelete ? <ClearIcon className="cursor-pointer hover:text-[red]" onClick={(e) => {
            e.preventDefault()
            onDeleteReview(review)
          }}/> : <></>}
          {loadingDelete ? <CircularProgress size={14}/> : <></>}
        </div>
      </div>

      <div className="text-lg text-light-grey font-light flex justify-between">
        <p className="w-[80%] break-all">{review.reviewText}</p>
        <ul className="flex">
          {rating ? (
            <Stars rating={rating} />
          ) : (
            <>
              <p className="text-xs">no rating left</p>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewItem;
