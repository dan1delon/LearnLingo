import { useModal } from '../../context';
import Icon from '../../shared/Icon/Icon';
import ModalLogin from '../ModalLogin/ModalLogin';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const { openModal } = useModal();

  const handleLoginClick = () => {
    openModal(<ModalLogin />);
  };

  const handleRegisterClick = () => {
    openModal(<ModalRegistration />);
  };

  return (
    <div className={css.wrapper}>
      <button type="button" className={css.loginBtn} onClick={handleLoginClick}>
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
    </div>
  );
};

export default AuthNav;
