import css from './FiltersByKnowledge.module.css';
import { useRef, useState } from 'react';
import Icon from '../../shared/Icon/Icon';
import PopoverKnowledge from '../PopoverKnowledge/PopoverKnowledge';

const FiltersByKnowledge = () => {
  const buttonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [chosenKnowledge, setChosenKnowledge] = useState('All');

  const handleTogglePopover = () => {
    if (isOpen === false) {
      setIsOpen(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 0);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };
  const handleClosePopover = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  const restrictionClick = e => {
    return buttonRef.current && buttonRef.current.contains(e.target);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <span className={css.line}>Level of knowledge</span>
        <button
          type="button"
          className={css.btn}
          ref={buttonRef}
          onClick={handleTogglePopover}
        >
          <span className={css.text}>{chosenKnowledge}</span>
          <div className={css.iconContainer}>
            <Icon iconId="icon-down" className={css.icon} />
          </div>
        </button>
      </div>
      {isOpen && (
        <PopoverKnowledge
          closePopover={handleClosePopover}
          restrictionClick={restrictionClick}
          setIsVisible={setIsVisible}
          setChosenKnowledge={setChosenKnowledge}
          chosenKnowledge={chosenKnowledge}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

export default FiltersByKnowledge;
