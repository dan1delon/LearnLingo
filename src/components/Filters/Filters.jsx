import FiltersByKnowledge from '../FiltersByKnowledge/FiltersByKnowledge';
import FiltersByLanguage from '../FiltersByLanguage/FiltersByLanguage';
import FiltersByPrice from '../FiltersByPrice/FiltersByPrice';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <div className={css.container}>
      <FiltersByLanguage />
      <FiltersByKnowledge />
      <FiltersByPrice />
    </div>
  );
};

export default Filters;
