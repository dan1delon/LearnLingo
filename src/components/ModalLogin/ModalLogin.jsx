import LoginForm from '../LoginForm/LoginForm';
import css from './ModalLogin.module.css';

const ModalLogin = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        <h3 className={css.title}>Login</h3>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default ModalLogin;
