import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './TeachersPage.module.css';
import { useEffect } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations';
import { selectError, selectIsLoading } from '../../redux/teachers/selectors';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && !isError && (
        <div className={css.container}>
          <Filters />
          <TeachersList />
        </div>
      )}
    </>
  );
};

export default TeachersPage;
