import Icon from '../../shared/Icon/Icon';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const handleLoginClick = () => {
    console.log('Login');
  };

  const handleRegisterClick = () => {
    console.log('Register');
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
