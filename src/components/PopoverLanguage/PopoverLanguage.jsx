import { useEffect, useRef } from 'react';
import css from './PopoverLanguage.module.css';
import clsx from 'clsx';

const LANGUAGES = ['French', 'English', 'German', 'Ukrainian', 'Polish'];

const PopoverLanguage = ({
  closePopover,
  restrictionClick,
  isVisible,
  setChosenLanguage,
  chosenLanguage,
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

  const handleChangeLanguage = language => {
    closePopover();
    setChosenLanguage(language);
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
