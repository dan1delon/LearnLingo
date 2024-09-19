import { useSelector } from 'react-redux';
import css from './TeachersLevels.module.css';
import { selectKnowledge } from '../../redux/filter/selectors';
import clsx from 'clsx';

const TeachersLevels = ({ data }) => {
  const filter = useSelector(selectKnowledge);

  return (
    <ul className={css.levelsList}>
      {data.levels.map(level => (
        <li
          key={level}
          className={clsx(css.levelsItem, {
            [css.activeFilter]: level === filter,
          })}
        >
          <p className={css.paragraph}>#{level}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeachersLevels;
