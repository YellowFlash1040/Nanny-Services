import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ArrowIcon } from '../../assets';

import s from './GetStartedButton.module.css';

interface GetStartedButtonProps {
  className?: string;
}

const GetStartedButton = ({ className }: GetStartedButtonProps) => {
  return (
    <Link to={'/nannies'} className={clsx(className, s.button)}>
      Get started
      <ArrowIcon width={18} />
    </Link>
  );
};

export default GetStartedButton;
