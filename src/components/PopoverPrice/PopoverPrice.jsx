import css from './PopoverPrice.module.css';
import { useEffect } from 'react';
import clsx from 'clsx';
import { changePriceFilter } from '../../redux/filter/slice';
import { useDispatch } from 'react-redux';

const PRICE = [10, 20, 30, 40];

const PopoverPrice = ({
  closePopover,
  isVisible,
  chosenPrice,
  handleOutsideClick,
  popoverRef,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleChange = price => {
    closePopover();
    dispatch(changePriceFilter(price));
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
