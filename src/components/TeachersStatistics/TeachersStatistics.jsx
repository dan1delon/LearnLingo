import clsx from 'clsx';
import Icon from '../../shared/Icon/Icon';
import css from './TeachersStatistics.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import ModalLogin from '../ModalLogin/ModalLogin';
import { useModal } from '../../context';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import { loadFavoritesAsync } from '../../firebaseHelpers/firebaseFavorites';

const TeachersStatistics = ({ data }) => {
  const favorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const isFavorite = Object.prototype.hasOwnProperty.call(favorites, data.id);
  const { openModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && user?.uid) {
      dispatch(loadFavoritesAsync(user.uid));
    }
  }, [isLoggedIn, user, dispatch]);

  const handleAddToFavoritesClick = async () => {
    if (!isLoggedIn) {
      openModal(<ModalLogin />);
      return;
    }

    const payload = { ...data, userId: user.uid };

    if (isFavorite) {
      dispatch(removeFavorite({ id: data.id, userId: user.uid }));
    } else {
      dispatch(addFavorite(payload));
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.nameContainer}>
        <p className={css.paragraph}>Languages</p>
        <h3 className={css.name}>{data.name + ' ' + data.surname}</h3>
      </div>
      <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>
          <Icon iconId="icon-book" className={css.icon} />
          <p className={css.statisticsText}>Lessons online</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css.statisticsText}>
            Lessons done: {data.lessons_done}
          </p>
        </li>
        <li className={css.statisticsItem}>
          <Icon iconId="icon-star" className={css.icon} />
          <p className={css.statisticsText}>Rating: {data.rating}</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css.statisticsText}>
            Price / 1 hour:{' '}
            <span className={css.price}>{data.price_per_hour}$</span>
          </p>
        </li>
      </ul>
      <button
        type="button"
        className={css.addToFavoritesBtn}
        onClick={handleAddToFavoritesClick}
      >
        <Icon
          iconId="icon-heart"
          className={clsx(css.iconHeart, { [css.favorites]: isFavorite })}
        />
      </button>
    </div>
  );
};

export default TeachersStatistics;
