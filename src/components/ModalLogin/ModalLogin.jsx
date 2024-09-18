import LoginForm from '../LoginForm/LoginForm';
import css from './ModalLogin.module.css';
import { useModal } from '../../context/modalContext.jsx';
import ModalRegistration from '../ModalRegistration/ModalRegistration.jsx';

const ModalLogin = () => {
  const { openModal } = useModal();

  const handleBtnClick = () => {
    openModal(<ModalRegistration />);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        <h3 className={css.title}>Login</h3>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for your teacher.
        </p>
      </div>
      <LoginForm />
      <p className={css.textRegister}>
        Don't have an account?
        <button className={css.registerBtn} onClick={handleBtnClick}>
          Register now
        </button>
      </p>
    </div>
  );
};

export default ModalLogin;
