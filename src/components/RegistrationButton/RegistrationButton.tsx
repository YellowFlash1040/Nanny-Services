import clsx from 'clsx';
import { MouseEvent, useState } from 'react';

import { Modal, RegisterForm } from '../../components';

import s from './RegistrationButton.module.css';

interface RegistrationButtonProps {
  className?: string;
}

const RegistrationButton = ({ className }: RegistrationButtonProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setIsOpened(true);
  };

  return (
    <>
      <button className={clsx(className, s.button)} type="button" onClick={handleOnClick}>
        Registration
      </button>
      <Modal
        className={s.modal}
        isOpened={isOpened}
        closeModal={() => setIsOpened(false)}
      >
        <RegisterForm />
      </Modal>
    </>
  );
};

export default RegistrationButton;
