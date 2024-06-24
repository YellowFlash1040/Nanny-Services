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
          <div>
            <LogButton title="in" onClick={() => {}} />
            <RegistrationButton />
          </div>
        )}
      </PageContainer>
    </header>
  );
};

export default Header;
