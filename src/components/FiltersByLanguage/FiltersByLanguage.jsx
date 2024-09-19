import css from './FiltersByLanguage.module.css';
import Icon from '../../shared/Icon/Icon';
import { usePopover } from '../../hooks/usePopover.js';
import PopoverLanguage from '../PopoverLanguage/PopoverLanguage';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/filter/selectors.js';

const FiltersByLanguage = () => {
  const chosenLanguage = useSelector(selectLanguage);
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
        <span className={css.line}>Languages</span>
        <button type="button" className={css.btn} onClick={handleTogglePopover}>
          <span className={css.text}>{chosenLanguage}</span>
          <div className={css.iconContainer}>
            <Icon
              iconId="icon-down"
              className={clsx(css.icon, { [css.iconRotate]: isOpen })}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <PopoverLanguage
          closePopover={handleClosePopover}
          handleOutsideClick={handleOutsideClick}
          chosenLanguage={chosenLanguage}
          isVisible={isVisible}
          popoverRef={popoverRef}
        />
      )}
    </div>
  );
};

export default FiltersByLanguage;
