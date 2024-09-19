import css from './PopoverKnowledge.module.css';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { changeKnowledgeFilter } from '../../redux/filter/slice';
import { useDispatch } from 'react-redux';

const KNOWLEDGE = [
  'A1 Beginner',
  'A2 Elementary',
  'B1 Intermediate',
  'B2 Upper-Intermediate',
  'C1 Advanced',
  'C2 Proficient',
];

const PopoverKnowledge = ({
  chosenKnowledge,
  isVisible,
  popoverRef,
  closePopover,
  handleOutsideClick,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleChange = knowledge => {
    closePopover();
    dispatch(changeKnowledgeFilter(knowledge));
  };

  return (
    <div
      className={clsx(css.popover, { [css.visible]: isVisible })}
      ref={popoverRef}
    >
      <ul className={css.list}>
        {KNOWLEDGE.map(knowledge => (
          <li
            key={knowledge}
            className={css.listItem}
            onClick={() => handleChange(knowledge)}
          >
            <p
              className={clsx(css.language, {
                [css.selected]: knowledge === chosenKnowledge,
              })}
            >
              {knowledge}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopoverKnowledge;
