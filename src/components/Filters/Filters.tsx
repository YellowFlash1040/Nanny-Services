import clsx from 'clsx';

import { SortByDropDown } from '../../components';

import s from './Filters.module.css';

interface FiltersProps {
  className?: string;
}

const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={clsx(className)}>
      <p className={s.filtersLabel}>Filters</p>
      <SortByDropDown />
    </div>
  );
};

export default Filters;
