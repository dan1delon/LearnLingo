import { useSelector } from 'react-redux';
import TeachersList from '../../components/TeachersList/TeachersList';
import { selectFavorites } from '../../redux/favorites/selectors';
import css from './FavoritesPage.module.css';
import { NavLink } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.container}>
      {Object.keys(favorites).length === 1 && (
        <div className={css.messageContainer}>
          <h1 className={css.message}>
            Your favorites list is as empty as a desert! Let's change that!
          </h1>
          <NavLink to="/teachers" className={css.link}>
            Find Your Favorites
          </NavLink>
        </div>
      )}
      {Object.keys(favorites).length > 0 && (
        <TeachersList showFavorites={true} />
      )}
    </div>
  );
};

export default FavoritesPage;
