import { useRef, useState } from 'react';
import Icon from '../../shared/Icon/Icon';
import css from './FiltersByLanguage.module.css';
import PopoverLanguage from '../PopoverLanguage/PopoverLanguage';

const FiltersByLanguage = () => {
  const buttonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [chosenLanguage, setChosenLanguage] = useState('All');

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
        <span className={css.line}>Languages</span>
        <button
          type="button"
          className={css.btn}
          ref={buttonRef}
          onClick={handleTogglePopover}
        >
          <span className={css.text}>{chosenLanguage}</span>
          <div className={css.iconContainer}>
            <Icon iconId="icon-down" className={css.icon} />
          </div>
        </button>
      </div>
      {isOpen && (
        <PopoverLanguage
          closePopover={handleClosePopover}
          restrictionClick={restrictionClick}
          setIsVisible={setIsVisible}
          setChosenLanguage={setChosenLanguage}
          chosenLanguage={chosenLanguage}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

export default FiltersByLanguage;
