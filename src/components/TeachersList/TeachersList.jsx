import TeachersItem from '../TeachersItem/TeachersItem';
import css from './TeachersList.module.css';

const data = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    languages: ['English', 'Spanish'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
      'C1 Advanced',
      'C2 Proficient',
    ],
    rating: 4.5,
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment: 'John is an excellent teacher! I highly recommend him.',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 4,
        comment:
          'John is very knowledgeable and patient. I enjoyed his classes.',
      },
    ],
    price_per_hour: 25,
    lessons_done: 1375,
    avatar_url: 'https://ftp.goit.study/img/avatars/1.jpg',
    lesson_info:
      'The lessons focus on improving speaking and listening skills through interactive activities and discussions.',
    conditions: [
      'Teaches only adult learners (18 years and above).',
      'Flexible scheduling options available.',
    ],
    experience:
      'John has been teaching languages for 7 years and has extensive experience in helping students improve their language skills. He has successfully taught numerous students from different backgrounds and proficiency levels.',
  },
];

const TeachersList = () => {
  return (
    <ul className={css.list}>
      {data.length === 0 && (
        <li className={css.listItemMessage}>
          <p className={css.message}>
            Sorry, there are no results matching your search :(
          </p>
        </li>
      )}
      {data.map(teacher => (
        <li key={teacher.id} className={css.listItem}>
          <TeachersItem data={teacher} />
        </li>
      ))}
    </ul>
  );
};

export default TeachersList;
