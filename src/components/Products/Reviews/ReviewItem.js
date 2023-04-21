import moment from "moment";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ReviewItem = ({ review, onDeleteReview, loadingDelete, userId }) => {
  console.log(review);
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
        <p className="text-light-grey">
          {moment(new Date(review.createdAt.seconds * 1000)).fromNow()}
        </p>
      </div>

      <div className="text-lg text-light-grey font-light lgl:flex lgl:justify-between">
        <p>{review.reviewText}</p>
        <ul className="flex">
          {rating ? [...Array(5)].map((star, i) => {
            const ratingVal = i + 1;
            return (
              <li>
                <label key={`rating_star-${i}`}>
                  <input
                    type="radio"
                    name="rating"
                    className="hidden"
                    value={ratingVal}
                  />
                  <FaStar color={ratingVal <= rating ? "#ffc107" : "#e4e5e9"} />
                </label>
              </li>
            );
          }): (
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
