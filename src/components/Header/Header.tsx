import { NavLink } from 'react-router-dom';
import { LogButton, PageContainer, UserProfile } from '../../components';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <PageContainer className={s.headerContainer}>
        <h1 className={s.logo}>Nanny.Services</h1>
        <nav className={s.navigation}>
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
        <UserProfile className={s.userProfile} />
        <LogButton title="out" />
      </PageContainer>
    </header>
  );
};

export default Header;
