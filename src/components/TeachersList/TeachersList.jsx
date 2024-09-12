import { useSelector } from 'react-redux';
import TeachersItem from '../TeachersItem/TeachersItem';
import css from './TeachersList.module.css';
import { selectTeachers } from '../../redux/teachers/selectors';

const TeachersList = () => {
  const data = useSelector(selectTeachers);

  const teacherArray = data
    ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
    : [];

  return (
    <>
      <ul className={css.list}>
        {teacherArray.length === 0 && (
          <li className={css.listItemMessage}>
            <p className={css.message}>
              Sorry, there are no results matching your search :(
            </p>
          </li>
        )}
        {teacherArray.map(teacher => (
          <li key={teacher.id} className={css.listItem}>
            <TeachersItem data={teacher} />
          </li>
        ))}
      </ul>
      <button type="button" className={css.loadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default TeachersList;
