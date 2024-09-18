import css from './FiltersByPrice.module.css';
import { useRef, useState } from 'react';
import Icon from '../../shared/Icon/Icon';
import PopoverPrice from '../PopoverPrice/PopoverPrice';

const FiltersByPrice = () => {
  const buttonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [chosenPrice, setChosenPrice] = useState('');

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
        <span className={css.line}>Price</span>
        <button
          type="button"
          className={css.btn}
          ref={buttonRef}
          onClick={handleTogglePopover}
        >
          <span className={css.text}>{chosenPrice} $</span>
          <div className={css.iconContainer}>
            <Icon iconId="icon-down" className={css.icon} />
          </div>
        </button>
      </div>
      {isOpen && (
        <PopoverPrice
          closePopover={handleClosePopover}
          restrictionClick={restrictionClick}
          setIsVisible={setIsVisible}
          setChosenPrice={setChosenPrice}
          chosenPrice={chosenPrice}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

export default FiltersByPrice;
