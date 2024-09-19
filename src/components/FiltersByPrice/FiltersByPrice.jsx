import css from './FiltersByPrice.module.css';
import Icon from '../../shared/Icon/Icon';
import PopoverPrice from '../PopoverPrice/PopoverPrice';
import { usePopover } from '../../hooks/usePopover';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectPrice } from '../../redux/filter/selectors';

const FiltersByPrice = () => {
  const chosenPrice = useSelector(selectPrice);
  const {
    isOpen,
    isVisible,
    popoverRef,
    handleTogglePopover,
    handleClosePopover,
    handleOutsideClick,
  } = usePopover();

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <span className={css.line}>Price</span>
        <button type="button" className={css.btn} onClick={handleTogglePopover}>
          <span className={css.text}>
            {chosenPrice} {chosenPrice && '$'}
          </span>
          <div className={css.iconContainer}>
            <Icon
              iconId="icon-down"
              className={clsx(css.icon, { [css.iconRotate]: isOpen })}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <PopoverPrice
          closePopover={handleClosePopover}
          handleOutsideClick={handleOutsideClick}
          chosenPrice={chosenPrice}
          isVisible={isVisible}
          popoverRef={popoverRef}
        />
      )}
    </div>
  );
};

export default FiltersByPrice;
