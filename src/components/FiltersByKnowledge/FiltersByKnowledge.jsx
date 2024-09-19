import css from './FiltersByKnowledge.module.css';
import Icon from '../../shared/Icon/Icon';
import PopoverKnowledge from '../PopoverKnowledge/PopoverKnowledge';
import { usePopover } from '../../hooks/usePopover.js';
import clsx from 'clsx';
import { selectKnowledge } from '../../redux/filter/selectors.js';
import { useSelector } from 'react-redux';

const FiltersByKnowledge = () => {
  const chosenKnowledge = useSelector(selectKnowledge);
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
        <span className={css.line}>Level of knowledge</span>
        <button type="button" className={css.btn} onClick={handleTogglePopover}>
          <span className={css.text}>{chosenKnowledge}</span>
          <div className={css.iconContainer}>
            <Icon
              iconId="icon-down"
              className={clsx(css.icon, { [css.iconRotate]: isOpen })}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <PopoverKnowledge
          closePopover={handleClosePopover}
          handleOutsideClick={handleOutsideClick}
          chosenKnowledge={chosenKnowledge}
          isVisible={isVisible}
          popoverRef={popoverRef}
        />
      )}
    </div>
  );
};

export default FiltersByKnowledge;
