import { useState } from 'react';
import clsx from 'clsx';

import {
  PageContainer,
  Logo,
  Navigation,
  UserPanel,
  LogButton,
  RegistrationButton
} from '../../components';
import { useAppContext } from '../../hooks';
import { BurgerMenuIcon, CrossIcon } from '../../assets';

import s from './Header.module.css';

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header className={s.header}>
      <PageContainer className={s.headerContainer}>
        <Logo className={s.logo} />
        <Navigation className={s.navigation} />
        <div className={s.signInUpButtonsContainer}>
          {(isLoggedIn && <UserPanel />) || (
            <>
              <LogButton title="in" onClick={() => {}} />
              <RegistrationButton className={s.registrationButton} />
            </>
          )}
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
      </PageContainer>
    </header>
  );
};

export default Header;
