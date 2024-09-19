import { useEffect, useRef } from 'react';
import css from './PopoverLanguage.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { changeLanguageFilter } from '../../redux/filter/slice';

const LANGUAGES = [
  'French',
  'English',
  'German',
  'Spanish',
  'Mandarin Chinese',
];

const PopoverLanguage = ({
  closePopover,
  isVisible,
  chosenLanguage,
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

  const handleChangeLanguage = language => {
    closePopover();
    dispatch(changeLanguageFilter(language));
  };

  return (
    <div
      className={clsx(css.popover, { [css.visible]: isVisible })}
      ref={popoverRef}
    >
      <ul className={css.list}>
        {LANGUAGES.map(language => (
          <li
            key={language}
            className={css.listItem}
            onClick={() => handleChangeLanguage(language)}
          >
            <p
              className={clsx(css.language, {
                [css.selected]: language === chosenLanguage,
              })}
            >
              {language}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopoverLanguage;
