import Filters from '../../components/Filters/Filters';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  return (
    <div className={css.container}>
      <Filters />
      <TeachersList />
      <button type="button">Load more</button>
    </div>
  );
};

export default TeachersPage;
