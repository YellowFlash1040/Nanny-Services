import clsx from 'clsx';

import s from './GetStartedButton.module.css';
import { ArrowIcon } from '../../assets';

interface GetStartedButtonProps {
  className?: string;
}

const GetStartedButton = ({ className }: GetStartedButtonProps) => {
  return (
    <button type="button" className={clsx(className, s.button)}>
      Get started
      <ArrowIcon width={18} />
    </button>
  );
};

export default GetStartedButton;
