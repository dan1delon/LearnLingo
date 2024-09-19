import { useSelector } from 'react-redux';
import TeachersItem from '../TeachersItem/TeachersItem';
import css from './TeachersList.module.css';
import { useEffect, useMemo, useState } from 'react';
import {
  selectFavoriteTeachers,
  selectFilteredTeachers,
  selectFilters,
} from '../../redux/filter/selectors';

const TeachersList = ({ showFavorites = false }) => {
  const [visibleTeachersCount, setVisibleTeachersCount] = useState(4);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    setVisibleTeachersCount(4);
  }, [filters, showFavorites]);

  const filteredTeachers = useSelector(
    showFavorites ? selectFavoriteTeachers : selectFilteredTeachers
  );

  const visibleTeachers = useMemo(() => {
    return filteredTeachers.slice(0, visibleTeachersCount);
  }, [filteredTeachers, visibleTeachersCount]);

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
      {visibleTeachersCount < filteredTeachers.length && (
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
