import {
  PageContainer,
  Logo,
  Navigation,
  UserPanel,
  LogButton,
  RegistrationButton
} from '../../components';
import { useAppContext } from '../../hooks';

import s from './Header.module.css';

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className={s.header}>
      <PageContainer className={s.headerContainer}>
        <Logo className={s.logo} />
        <Navigation />
        {(isLoggedIn && <UserPanel />) || (
          <div className={s.signInUpButtonsContainer}>
            <LogButton title="in" onClick={() => {}} />
            <RegistrationButton className={s.registrationButton} />
          </div>
        )}
      </PageContainer>
    </header>
  );
};

export default Header;
