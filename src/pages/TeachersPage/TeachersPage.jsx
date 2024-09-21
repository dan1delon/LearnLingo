import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './TeachersPage.module.css';
import { selectError, selectIsLoading } from '../../redux/teachers/selectors';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations';
import { resetFilters } from '../../redux/filter/slice';
import { useLocation } from 'react-router-dom';

const TeachersPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(resetFilters());
  }, [location.pathname, dispatch]);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={css.container}>
        <Filters />
        <TeachersList />
      </div>
    </>
  );
};

export default TeachersPage;
