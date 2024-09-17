import clsx from 'clsx';
import css from './ModalLogout.module.css';
import useAuthActions from '../../firebaseHelpers/index.js';
import { useModal } from '../../context/modalContext.jsx';

const ModalLogout = () => {
  const { logOutUser } = useAuthActions();
  const { closeModal } = useModal();

  const handleLogoutClick = e => {
    logOutUser();
    closeModal(e);
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Confirm Log Out</h3>
      <p className={css.text}>
        Are you sure you want to log out? You will need to log in again to
        access your favorites page.
      </p>
      <div className={css.buttonWrapper}>
        <button type="button" className={css.btn} onClick={handleLogoutClick}>
          Log Out
        </button>
        <button
          type="button"
          className={clsx(css.btn, css.btnNo)}
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalLogout;
