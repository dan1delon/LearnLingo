import { useSelector } from 'react-redux';
import TeachersItem from '../TeachersItem/TeachersItem';
import css from './TeachersList.module.css';
import { selectTeachers } from '../../redux/teachers/selectors';
import { useMemo, useState } from 'react';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const TeachersList = ({ showFavorites = false }) => {
  const [visibleTeachersCount, setVisibleTeachersCount] = useState(4);
  const data = useSelector(selectTeachers);
  const favorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const teachersToShow = useMemo(() => {
    if (showFavorites) {
      if (!isLoggedIn) {
        return [];
      }

      return data.filter(teacher => teacher.id in favorites);
    }

    return data;
  }, [showFavorites, data, favorites, isLoggedIn]);

  const visibleTeachers = useMemo(() => {
    return teachersToShow.slice(0, visibleTeachersCount);
  }, [teachersToShow, visibleTeachersCount]);

  const handleLoadMore = () => {
    setVisibleTeachersCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <ul className={css.list}>
        {visibleTeachers.length === 0 && showFavorites === false && (
          <li className={css.listItemMessage}>
            <p className={css.message}>
              Sorry, there are no teachers matching your search :(
            </p>
          </li>
        )}
        {visibleTeachers.map(teacher => (
          <li key={teacher.id} className={css.listItem}>
            <TeachersItem data={teacher} />
          </li>
        ))}
      </ul>
      {visibleTeachersCount < teachersToShow.length && (
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
