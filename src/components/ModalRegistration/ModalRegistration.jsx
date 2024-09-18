import { useModal } from '../../context';
import ModalLogin from '../ModalLogin/ModalLogin';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import css from './ModalRegistration.module.css';

const ModalRegistration = () => {
  const { openModal } = useModal();

  const handleBtnClick = () => {
    openModal(<ModalLogin />);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        <h3 className={css.title}>Registration</h3>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>
      <RegistrationForm />
      <p className={css.textRegister}>
        Already have an account?
        <button className={css.registerBtn} onClick={handleBtnClick}>
          Login now
        </button>
      </p>
    </div>
  );
};

export default ModalRegistration;
