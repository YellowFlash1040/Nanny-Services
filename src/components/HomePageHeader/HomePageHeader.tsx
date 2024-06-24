// import { useState } from 'react';

import {
  PageContainer,
  Logo,
  Navigation,
  LogButton,
  RegistrationButton,
  UserPanel
  // Modal,
  // LoginForm,
  // RegisterForm
} from '../../components';
import { useAppContext } from '../../hooks';

import s from './HomePageHeader.module.css';

const HomePageHeader = () => {
  // const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  // const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false);
  const { isLoggedIn } = useAppContext();

  return (
    <>
      <header className={s.header}>
        <PageContainer className={s.headerContainer}>
          <Logo className={s.logo} />
          <div className={s.headerRightPartContainer}>
            <Navigation />
            <div className={s.signInUpButtonsContainer}>
              {/* <LogButton title="in" onClick={() => setIsLoginModalOpened(true)} />
              <RegistrationButton onClick={() => setIsRegisterModalOpened(true)} /> */}
              {(isLoggedIn && <UserPanel />) || (
                <>
                  <LogButton title="in" />
                  <RegistrationButton className={s.registrationButton} />
                </>
              )}
            </div>
          </div>
        </PageContainer>
      </header>
      {/* <Modal
        className={s.modal}
        isOpened={isLoginModalOpened}
        closeModal={() => setIsLoginModalOpened(false)}
      >
        <LoginForm />
      </Modal>
      <Modal
        className={s.modal}
        isOpened={isRegisterModalOpened}
        closeModal={() => setIsRegisterModalOpened(false)}
      >
        <RegisterForm />
      </Modal> */}
    </>
  );
};

export default HomePageHeader;
