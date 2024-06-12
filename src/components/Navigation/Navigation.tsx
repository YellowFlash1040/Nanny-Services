import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import s from './Navigation.module.css';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={clsx(className)}>
      <ul className={s.pagesList}>
        <li className={s.pageItem}>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className={s.pageItem}>
          <NavLink to={'/nannies'}>Nannies</NavLink>
        </li>
        <li className={s.pageItem}>
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
