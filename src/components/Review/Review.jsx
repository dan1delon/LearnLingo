import Icon from '../../shared/Icon/Icon';
import css from './Review.module.css';

const Review = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        <div className={css.namePicture}>{reviewer_name[0]}</div>
        <div className={css.nameWrapper}>
          <p className={css.name}>{reviewer_name}</p>
          <div className={css.ratingWrapper}>
            <Icon iconId="icon-star" className={css.icon} />
            <p className={css.rating}>{reviewer_rating}.0</p>
          </div>
        </div>
      </div>
      <p className={css.text}>{comment}</p>
    </div>
  );
};

export default Review;
