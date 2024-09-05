import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import Icon from '../../shared/Icon/Icon';

const Logo = () => {
  return (
    <NavLink to="/" className={css.wrapper}>
      <Icon iconId="icon-ukraine" className={css.icon} />
      <p className={css.title}>LearnLingo</p>
    </NavLink>
  );
};

export default Logo;
