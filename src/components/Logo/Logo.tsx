import { Link } from 'react-router-dom';
import clsx from 'clsx';

import s from './Logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      className={clsx(s.logo, className)}
      to={'/'}
      onClick={(e) => e.currentTarget.blur()}
    >
      Nanny.Services
    </Link>
  );
};

export default Logo;
