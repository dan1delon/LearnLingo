import css from './PopoverPrice.module.css';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

const PRICE = ['10', '20', '30', '40'];

const PopoverPrice = ({
  closePopover,
  restrictionClick,
  isVisible,
  setChosenPrice,
  chosenPrice,
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

  const handleChange = price => {
    closePopover();
    setChosenPrice(price);
  };

  return (
    <div
      className={clsx(css.popover, { [css.visible]: isVisible })}
      ref={popoverRef}
    >
      <ul className={css.list}>
        {PRICE.map(price => (
          <li
            key={price}
            className={css.listItem}
            onClick={() => handleChange(price)}
          >
            <p
              className={clsx(css.language, {
                [css.selected]: price === chosenPrice,
              })}
            >
              {price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopoverPrice;
