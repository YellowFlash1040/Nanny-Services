import clsx from 'clsx';
import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

import s from './Button.module.css';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  className,
  children,
  onClick = () => {},
  type = 'button'
}: ButtonProps) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onClick(event);
  };

  return (
    <button className={clsx(className, s.button)} type={type} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
