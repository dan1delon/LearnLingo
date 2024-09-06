import { NavLink } from 'react-router-dom';
import {
  banner_1x_png,
  banner_2x_png,
  banner_1x_webp,
  banner_2x_webp,
} from '../../../public/img';
import css from './MainBanner.module.css';

const MainBanner = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title}>
          Unlock your potential with the best{' '}
          <span className={css.highlight}>language</span> tutors
        </h1>
        <p className={css.paragraph}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers" className={css.link}>
          Get started
        </NavLink>
      </div>
      <img
        className={css.img}
        loading="lazy"
        srcSet={`
      ${banner_1x_webp} 1x,
      ${banner_1x_png} 1x,
      ${banner_2x_webp} 2x,
      ${banner_2x_png} 2x
    `}
        src={banner_1x_png}
        alt="girl learning with laptop"
        width="568px"
        height="530px"
      />
    </div>
  );
};

export default MainBanner;
