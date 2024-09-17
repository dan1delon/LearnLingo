import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleActiveLink = ({ isActive }) => {
    return clsx(css.link, { [css.active]: isActive });
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={handleActiveLink}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={handleActiveLink}>
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites" className={handleActiveLink}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default UserMenu;
