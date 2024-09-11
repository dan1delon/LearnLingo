import BookingForm from '../BookingForm/BookingForm';
import css from './ModalBooking.module.css';

const ModalBooking = ({ data }) => {
  return (
    <div className={css.mainWrapper}>
      <div className={css.infoWrapper}>
        <h3 className={css.title}>Book trial lesson</h3>
        <p className={css.paragraph}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.nameWrapper}>
          <img
            src={data.avatar_url}
            alt={data.name}
            className={css.teacherAvatar}
          />
          <div className={css.teacherInfo}>
            <p className={css.teacherParagraph}>Your teacher</p>
            <p className={css.name}>{data.name + ' ' + data.surname}</p>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default ModalBooking;
