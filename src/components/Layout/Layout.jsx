import { useLocation } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  const location = useLocation();

  const isGreyBackground =
    location.pathname === '/teachers' || location.pathname === '/favorites';

  return (
    <div className={css.container}>
      <AppBar />
      <div
        className={
          isGreyBackground ? css.greyBackground : css.defaultBackground
        }
      >
        <main className={css.content}>
          <Toaster
            position="top-right"
            toastOptions={{ duration: 4000, style: { padding: '16px' } }}
          />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
