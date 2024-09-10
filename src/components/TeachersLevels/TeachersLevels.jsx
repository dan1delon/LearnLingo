import css from './TeachersLevels.module.css';

const TeachersLevels = ({ data }) => {
  return (
    <ul className={css.levelsList}>
      {data.levels.map(level => (
        <li key={level} className={css.levelsItem}>
          <p className={css.paragraph}>#{level}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeachersLevels;
