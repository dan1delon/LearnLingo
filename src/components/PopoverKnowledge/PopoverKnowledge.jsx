import css from './PopoverKnowledge.module.css';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

const KNOWLEDGE = [
  'A1 Beginner',
  'A2 Elementary',
  'B1 Intermediate',
  'B2 Upper-Intermediate',
  'C1 Advanced',
  'C2 Proficient',
];

const PopoverKnowledge = ({
  closePopover,
  restrictionClick,
  isVisible,
  setChosenKnowledge,
  chosenKnowledge,
}) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        !restrictionClick(e) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target)
      ) {
        closePopover();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closePopover, restrictionClick]);

  const handleChange = knowledge => {
    closePopover();
    setChosenKnowledge(knowledge);
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
