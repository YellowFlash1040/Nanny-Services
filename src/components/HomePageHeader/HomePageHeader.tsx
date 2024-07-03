import clsx from 'clsx';
import { useState } from 'react';

import {
  Logo,
  Navigation,
  LogButton,
  RegistrationButton,
  UserPanel
} from '../../components';
import { useAppContext } from '../../hooks';
import { BurgerMenuIcon, CrossIcon } from '../../assets';

import s from './HomePageHeader.module.css';

const HomePageHeader = () => {
  const { isLoggedIn } = useAppContext();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header className={s.header}>
      <Logo className={s.logo} />
      <div className={s.headerRightPartContainer}>
        <Navigation className={s.navigation} />
        <div className={s.signInUpButtonsContainer}>
          {(isLoggedIn && <UserPanel />) || (
            <>
              <LogButton title="in" />
              <RegistrationButton />
            </>
          )}
        </div>
      </div>
      <div className={s.mobileHeader}>
        <button
          className={s.burgerMenuButton}
          type="button"
          onClick={() => setIsMobileMenuOpened(true)}
        >
          <BurgerMenuIcon width={46} height={46} />
        </button>
        <div
          className={clsx(s.burgerMenu, {
            [s.burgerMenuOpened]: isMobileMenuOpened
          })}
        >
          {(isLoggedIn && <UserPanel />) || (
            <div className={s.mobileSignInUpButtonsContainer}>
              <LogButton title="in" onClick={() => {}} />
              <RegistrationButton className={s.registrationButton} />
            </div>
          )}
          <div
            className={s.mobileNavigationContainer}
            onClick={() => setIsMobileMenuOpened(false)}
          >
            <Navigation className={s.mobileNavigation} />
            <button className={s.closeBurgerMenuButton} type="button">
              <CrossIcon width={32} height={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
