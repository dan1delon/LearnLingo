import css from './HomePage.module.css';
import MainBanner from '../../components/MainBanner/MainBanner';
import Statistics from '../../components/Statistics/Statistics';

const HomePage = () => {
  return (
    <div className={css.container}>
      <MainBanner />
      <Statistics />
    </div>
  );
};

export default HomePage;
