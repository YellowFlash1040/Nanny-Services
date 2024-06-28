import {
  PageContainer,
  Logo,
  Navigation,
  LogButton,
  RegistrationButton,
  UserPanel
} from '../../components';
import { useAppContext } from '../../hooks';

import s from './HomePageHeader.module.css';

const HomePageHeader = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className={s.header}>
      <PageContainer className={s.headerContainer}>
        <Logo className={s.logo} />
        <div className={s.headerRightPartContainer}>
          <Navigation />
          <div className={s.signInUpButtonsContainer}>
            {(isLoggedIn && <UserPanel />) || (
              <>
                <LogButton title="in" />
                <RegistrationButton />
              </>
            )}
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

export default HomePageHeader;
