import clsx from 'clsx';
import { MouseEvent, useState } from 'react';

import { Modal, LoginForm } from '../../components';

import s from './LogButton.module.css';

interface LogButtonProps {
  className?: string;
  title: 'in' | 'out';
  onClick?: (event: MouseEvent) => void;
}

const LogButton = ({ className, title, onClick = () => {} }: LogButtonProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    if (title === 'in') {
      setIsOpened(true);
    } else {
      onClick(event);
    }
  };

  return (
    <>
      <button
        className={clsx(s.logButton, className)}
        type="button"
        onClick={handleOnClick}
      >
        Log {title}
      </button>
      {title === 'in' && (
        <Modal
          className={s.modal}
          isOpened={isOpened}
          closeModal={() => {
            setIsOpened(false);
          }}
        >
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LogButton;
