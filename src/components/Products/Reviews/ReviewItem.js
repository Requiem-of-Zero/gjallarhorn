import moment from "moment";
import Image from "next/image";
import Stars from "./Stars";

const ReviewItem = ({ review, onDeleteReview, loadingDelete, userId }) => {
  const { rating } = review;
  return (
    <div className="py-2">
      <div id="review_info" className="flex justify-between">
        <div id="user_photo" className="flex gap-[5px]">
          <Image
            className="rounded-full"
            src={review.creatorPhotoURL}
            width={25}
            height={25}
          />
          <h3 className="font-bold">{review.creatorDisplayText}</h3>
        </div>
        <p className="text-light-grey text-sm">
          {moment(new Date(review.createdAt.seconds * 1000)).fromNow()}
        </p>
      </div>

      <div className="text-lg text-light-grey font-light flex justify-between">
        <p className="w-[50%] break-all">{review.reviewText}</p>
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
