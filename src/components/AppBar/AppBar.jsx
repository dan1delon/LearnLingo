import css from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';

const AppBar = () => {
  return (
    <header className={css.wrapperMain}>
      <div className={css.wrapper}>
        <Logo />
        <UserMenu />
        <AuthNav />
      </div>
      <MobileMenu />
    </header>
  );
};

export default AppBar;
