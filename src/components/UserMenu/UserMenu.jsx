import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

const UserMenu = () => {
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
      <NavLink to="/favorites" className={handleActiveLink}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default UserMenu;
