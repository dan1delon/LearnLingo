import { useSelector } from 'react-redux';
import { useModal } from '../../context';
import Icon from '../../shared/Icon/Icon';
import ModalLogin from '../ModalLogin/ModalLogin';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import css from './AuthNav.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import ModalLogout from '../ModalLogout/ModalLogout';

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { openModal } = useModal();

  const handleLoginClick = () => {
    openModal(<ModalLogin />);
  };

  const handleRegisterClick = () => {
    openModal(<ModalRegistration />);
  };

  const handleLogoutClick = () => {
    openModal(<ModalLogout />);
  };

  return (
    <div className={css.wrapper}>
      {!isLoggedIn && (
        <>
          <button
            type="button"
            className={css.loginBtn}
            onClick={handleLoginClick}
          >
            <Icon iconId="icon-log-in" className={css.icon} />
            Log in
          </button>
          <button
            type="button"
            className={css.registerBtn}
            onClick={handleRegisterClick}
          >
            Registration
          </button>
        </>
      )}
      {isLoggedIn && (
        <button
          type="button"
          className={css.loginBtn}
          onClick={handleLogoutClick}
        >
          <Icon iconId="icon-log-in" className={css.icon} />
          Log out
        </button>
      )}
    </div>
  );
};

export default AuthNav;
