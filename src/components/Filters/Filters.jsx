import { useDispatch } from 'react-redux';
import FiltersByKnowledge from '../FiltersByKnowledge/FiltersByKnowledge';
import FiltersByLanguage from '../FiltersByLanguage/FiltersByLanguage';
import FiltersByPrice from '../FiltersByPrice/FiltersByPrice';
import css from './Filters.module.css';
import { resetFilters } from '../../redux/filter/slice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={css.container}>
      <FiltersByLanguage />
      <FiltersByKnowledge />
      <FiltersByPrice />
      <button type="button" className={css.btn} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Filters;
