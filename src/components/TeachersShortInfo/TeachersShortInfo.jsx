import TeachersDetailedInfo from '../TeachersDetailedInfo/TeachersDetailedInfo';
import css from './TeachersShortInfo.module.css';

const TeachersShortInfo = ({ data, handleShowBookingBtn }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.paragraph}>
          <span className={css.highlight}>Speaks:</span>{' '}
          <span className={css.underlinedWords}>
            {data.languages.join(', ')}
          </span>
        </p>
        <p className={css.paragraph}>
          <span className={css.highlight}>Lesson Info:</span> {data.lesson_info}
        </p>
        <p className={css.paragraph}>
          <span className={css.highlight}>Conditions:</span>{' '}
          {data.conditions.join(' ')}
        </p>
      </div>
      <TeachersDetailedInfo
        data={data}
        handleShowBookingBtn={handleShowBookingBtn}
      />
    </div>
  );
};

export default TeachersShortInfo;
