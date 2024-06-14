import clsx from 'clsx';
import { MouseEvent, MouseEventHandler } from 'react';

import s from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const LoadMoreButton = ({ className, onClick }: LoadMoreButtonProps) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onClick(event);
  };

  return (
    <button
      className={clsx(className, s.loadMoreButton)}
      type="button"
      onClick={handleOnClick}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
