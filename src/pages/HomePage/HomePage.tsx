import {
  ExperiencedNanniesCard,
  GetStartedButton,
  PageContainer
} from '../../components';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={s.section}>
        <PageContainer className={s.container}>
          <h1 className={s.title}>Make Life Easier for the Family:</h1>
          <p className={s.slogan}>Find Babysitters Online for All Occasions</p>
          <GetStartedButton />
        </PageContainer>
      </section>
      <div className={s.redBackground}>
        <div className={s.heroImage} />
        <ExperiencedNanniesCard className={s.experiencedNanniesCard} />
      </div>
    </>
  );
};

export default HomePage;
