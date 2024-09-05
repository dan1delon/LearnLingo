import css from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Logo from '../Logo/Logo';

const AppBar = () => {
  return (
    <header className={css.wrapperMain}>
      <div className={css.wrapperNav}>
        <Logo />
        <UserMenu />
      </div>
      <AuthNav />
    </header>
  );
};

export default AppBar;
