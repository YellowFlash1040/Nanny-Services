import clsx from 'clsx';

import s from './RegistrationButton.module.css';

interface RegistrationButtonProps {
  className?: string;
}

const RegistrationButton = ({ className }: RegistrationButtonProps) => {
  return (
    <button className={clsx(className, s.button)} type="button">
      Registration
    </button>
  );
};

export default RegistrationButton;
