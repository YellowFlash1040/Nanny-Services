import clsx from 'clsx';

import s from './DataLoader.module.css';

interface DataLoaderProps {
  className?: string;
}

const DataLoader = ({ className }: DataLoaderProps) => {
  return <div className={clsx(s.loader, className)}></div>;
};

export default DataLoader;
