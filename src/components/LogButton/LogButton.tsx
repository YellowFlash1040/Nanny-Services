import clsx from 'clsx';

import s from './LogButton.module.css';

interface LogButtonProps {
  className?: string;
  title: string;
}

const LogButton = ({ title, className }: LogButtonProps) => {
  return (
    <button className={clsx(s.logButton, className)} type="button">
      Log {title}
    </button>
  );
};

export default LogButton;
