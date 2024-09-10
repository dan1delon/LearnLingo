import { useState } from 'react';
import css from './TeachersDetailedInfo.module.css';
import Review from '../Review/Review';

const TeachersDetailedInfo = ({ data, handleShowBookingBtn }) => {
  const [isDetailedInfoVisible, setDetailedInfoVisible] = useState(false);

  const handleReadMoreClick = () => {
    setDetailedInfoVisible(true);
    handleShowBookingBtn();
  };

  return (
    <div className={css.container}>
      {!isDetailedInfoVisible && (
        <button
          type="button"
          className={css.readMoreBtn}
          onClick={handleReadMoreClick}
        >
          Read more
        </button>
      )}
      {isDetailedInfoVisible && (
        <div>
          <p className={css.paragraph}>{data.experience}</p>
          <ul className={css.reviews}>
            {data.reviews.map(review => (
              <li key={review.comment.length} className={css.review}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeachersDetailedInfo;
