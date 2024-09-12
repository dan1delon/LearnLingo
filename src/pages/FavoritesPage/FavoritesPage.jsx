import Filters from '../../components/Filters/Filters';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <div className={css.container}>
      <Filters />
      <TeachersList />
    </div>
  );
};

export default FavoritesPage;
