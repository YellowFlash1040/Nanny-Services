import { PageContainer, Logo, Navigation, UserPanel } from '../../components';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <PageContainer className={s.headerContainer}>
        <Logo className={s.logo} />
        <Navigation />
        <UserPanel />
      </PageContainer>
    </header>
  );
};

export default Header;
