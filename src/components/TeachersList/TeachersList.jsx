import { useSelector } from 'react-redux';
import TeachersItem from '../TeachersItem/TeachersItem';
import css from './TeachersList.module.css';
import { selectTeachers } from '../../redux/teachers/selectors';
import { useState } from 'react';

const TeachersList = () => {
  const [visibleAdsCount, setVisibleAdsCount] = useState(4);
  const data = useSelector(selectTeachers);

  const handleLoadMore = () => {
    setVisibleAdsCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <ul className={css.list}>
        {data.length === 0 && (
          <li className={css.listItemMessage}>
            <p className={css.message}>
              Sorry, there are no results matching your search :(
            </p>
          </li>
        )}
        {data.slice(0, visibleAdsCount).map(teacher => (
          <li key={teacher.id} className={css.listItem}>
            <TeachersItem data={teacher} />
          </li>
        ))}
      </ul>
      {data.length > 4 && visibleAdsCount < data.length && (
        <button
          type="button"
          className={css.loadMoreBtn}
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default TeachersList;
