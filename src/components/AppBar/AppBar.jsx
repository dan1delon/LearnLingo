import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const handleActiveLink = ({ isActive }) => {
  return clsx(css.link, { [css.active]: isActive });
};

const AppBar = () => {
  return (
    <header className={css.wrapperMain}>
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
    </header>
  );
};

export default AppBar;
