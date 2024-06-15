import clsx from 'clsx';

import { StarIcon } from '../../assets';
import { Review } from '../../types';

import s from './Reviews.module.css';

interface ReviewsProps {
  className?: string;
  reviews: Review[];
}

const Reviews = ({ className, reviews }: ReviewsProps) => {
  return (
    <ul className={clsx(className, s.reviewsList)}>
      {reviews.map((review) => (
        <li key={review.reviewer} className={s.reviewsListItem}>
          <div className={s.userInfo}>
            <div className={s.avatar}>{review.reviewer[0]}</div>
            <div className={s.nameAndRating}>
              <p className={s.name}>{review.reviewer}</p>
              <div className={s.ratingContainer}>
                <StarIcon width={16} height={16} />
                <p className={s.rating}>{review.rating.toFixed(1)}</p>
              </div>
            </div>
          </div>
          <p className={s.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
