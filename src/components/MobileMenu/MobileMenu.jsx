import { useState } from 'react';
import css from './MobileMenu.module.css';
import Icon from '../../shared/Icon/Icon';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context';
import ModalLogin from '../ModalLogin/ModalLogin';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import ModalLogout from '../ModalLogout/ModalLogout';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const MobileMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  const openLogin = () => {
    toggleMenu();
    openModal(<ModalLogin />);
  };

  const openRegistration = () => {
    toggleMenu();
    openModal(<ModalRegistration />);
  };

  const openLogout = () => {
    toggleMenu();
    openModal(<ModalLogout />);
  };

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <NavLink to="/" className={css.wrapper}>
        <Icon iconId="icon-ukraine" className={css.icon} />
        <p className={css.title}>LearnLingo</p>
      </NavLink>
      <button className={css.burger} onClick={toggleMenu}>
        <Icon iconId="icon-burger" className={css.icon} />
      </button>
      {isOpen && (
        <div className={css.mobileMenu}>
          <button className={css.burger} onClick={toggleMenu}>
            <Icon iconId="icon-close-btn" className={css.iconClose} />
          </button>
          <ul className={css.list}>
            <li className={css.item} onClick={toggleMenu}>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li className={css.item} onClick={toggleMenu}>
              <NavLink to="/teachers" className={css.link}>
                Teachers
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className={css.item} onClick={toggleMenu}>
                <NavLink to="/favorites" className={css.link}>
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
          {!isLoggedIn && (
            <ul className={css.authList}>
              <li className={css.authItem} onClick={openLogin}>
                <button type="button" className={css.loginBtn}>
                  Log in
                  <Icon iconId="icon-log-in" className={css.icon} />
                </button>
              </li>
              <li className={css.authItem} onClick={openRegistration}>
                <button type="button" className={css.loginBtn}>
                  Register
                </button>
              </li>
            </ul>
          )}
          {isLoggedIn && (
            <div className={css.userWrapper}>
              <p className={css.userName}>
                Hi, <span className={css.name}>{userName || 'User'}</span>
              </p>
              <button
                type="button"
                className={css.loginBtn}
                onClick={openLogout}
              >
                Log out
                <Icon iconId="icon-log-in" className={css.icon} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
