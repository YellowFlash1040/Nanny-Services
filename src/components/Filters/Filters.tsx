import clsx from 'clsx';

import { SortByDropDown } from '../../components';
import { filters } from '../../constants';
import { Filter } from '../../types';

import s from './Filters.module.css';

interface FiltersProps {
  className?: string;
  onChange: (filter: Filter) => void;
}

const Filters = ({ className, onChange }: FiltersProps) => {
  return (
    <div className={clsx(className)}>
      <p className={s.filtersLabel}>Filters</p>
      <SortByDropDown
        optionsList={filters}
        onChange={(selectedItem) => onChange(selectedItem as Filter)}
        defaultOption={filters.length - 1}
      />
    </div>
  );
};

export default Filters;
