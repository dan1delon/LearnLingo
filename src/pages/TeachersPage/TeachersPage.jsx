import { useDispatch } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './TeachersPage.module.css';
import { useEffect } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations';

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  return (
    <div className={css.container}>
      <Filters />
      <TeachersList />
    </div>
  );
};

export default TeachersPage;
