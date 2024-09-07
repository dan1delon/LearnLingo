import Icon from '../../shared/Icon/Icon';
import css from './TeachersStatistics.module.css';

const TeachersStatistics = ({ data }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.nameContainer}>
        <p className={css.paragraph}>Languages</p>
        <h3 className={css.name}>{data.name + ' ' + data.surname}</h3>
      </div>
      <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>
          <Icon iconId="icon-book" className={css.icon}></Icon>
          <p className={css.statisticsText}>Lessons online</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css.statisticsText}>
            Lessons done: {data.lessons_done}
          </p>
        </li>
        <li className={css.statisticsItem}>
          <Icon iconId="icon-star" className={css.icon}></Icon>
          <p className={css.statisticsText}>Rating: {data.rating}</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css.statisticsText}>
            Price / 1 hour:{' '}
            <span className={css.price}>{data.price_per_hour}$</span>
          </p>
        </li>
      </ul>
      <button type="button" className={css.addToFavoritesBtn}>
        <Icon iconId="icon-heart" className={css.iconHeart}></Icon>
      </button>
    </div>
  );
};

export default TeachersStatistics;
