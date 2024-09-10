import RegistrationForm from '../RegistrationForm/RegistrationForm';
import css from './ModalRegistration.module.css';

const ModalRegistration = () => {
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
    </div>
  );
};

export default ModalRegistration;
