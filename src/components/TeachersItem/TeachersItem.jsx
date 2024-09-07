import Icon from '../../shared/Icon/Icon';
import TeachersDetailedInfo from '../TeachersDetailedInfo/TeachersDetailedInfo';
import TeachersLevels from '../TeachersLevels/TeachersLevels';
import TeachersShortInfo from '../TeachersShortInfo/TeachersShortInfo';
import TeachersStatistics from '../TeachersStatistics/TeachersStatistics';
import css from './TeachersItem.module.css';

const TeachersItem = ({ data }) => {
  const handleReadMoreClick = () => {
    console.log(data);
  };

  const handleBookingClick = () => {
    console.log(data);
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.avatarWrapper}>
        <img src={data.avatar_url} alt={data.name} className={css.avatar} />
        <Icon iconId="icon-online" className={css.icon}></Icon>
      </div>
      <div className={css.infoContainer}>
        <TeachersStatistics data={data} />
        <TeachersShortInfo data={data} />
        <button
          type="button"
          className={css.readMoreBtn}
          onClick={handleReadMoreClick}
        >
          Read more
        </button>
        <TeachersDetailedInfo data={data} />
        <TeachersLevels data={data} />
        <button
          type="button"
          className={css.bookTrialBtn}
          onClick={handleBookingClick}
        >
          Book trial lesson
        </button>
      </div>
    </div>
  );
};

export default TeachersItem;
