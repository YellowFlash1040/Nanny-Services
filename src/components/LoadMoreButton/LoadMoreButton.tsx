import clsx from 'clsx';

import s from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  className?: string;
}

const LoadMoreButton = ({ className }: LoadMoreButtonProps) => {
  return <button className={clsx(className, s.loadMoreButton)}>Load more</button>;
};

export default LoadMoreButton;
