import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { useAppContext } from '../../hooks';

import s from './Navigation.module.css';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const { isLoggedIn } = useAppContext();
  const location = useLocation();

  return (
    <nav className={clsx(className)}>
      <ul
        className={clsx(s.pagesList, { [s.homePageNavList]: location.pathname === '/' })}
      >
        <li className={s.pageItem}>
          <NavLink to={'/'} onClick={(e) => e.currentTarget.blur()}>
            Home
          </NavLink>
        </li>
        <li className={clsx(s.pageItem, s.pageItemAfter)}>
          <NavLink to={'/nannies'} onClick={(e) => e.currentTarget.blur()}>
            Nannies
          </NavLink>
        </li>
        {isLoggedIn && location.pathname !== '/' && (
          <li className={clsx(s.pageItem, s.pageItemAfter)}>
            <NavLink to={'/favorites'} onClick={(e) => e.currentTarget.blur()}>
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
