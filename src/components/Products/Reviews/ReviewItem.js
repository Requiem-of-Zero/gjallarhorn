import moment from "moment";
import Image from "next/image";

const ReviewItem = ({ review, onDeleteReview, loadingDelete, userId }) => {
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
        <p className="text-light-grey">
          {moment(new Date(review.createdAt.seconds * 1000)).fromNow()}
        </p>
      </div>

      <div className="text-lg text-light-grey font-light">
        {review.reviewText}
      </div>
    </div>
  );
};

export default ReviewItem;
