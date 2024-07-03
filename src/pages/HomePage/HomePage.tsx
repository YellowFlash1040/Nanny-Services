import {
  HomePageHeader,
  PageContainer,
  GetStartedButton,
  ExperiencedNanniesCard
} from '../../components';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.pageContainer}>
      <div className={s.bodyContainer}>
        <div className={s.heroImage} />
        <ExperiencedNanniesCard className={s.experiencedNanniesCard} />
        <div className={s.contentContainer}>
          <HomePageHeader />
          <main>
            <section className={s.section}>
              <PageContainer className={s.container}>
                <h1 className={s.title}>Make Life Easier for the Family:</h1>
                <p className={s.slogan}>Find Babysitters Online for All Occasions</p>
                <GetStartedButton className={s.getStartedButton} />
              </PageContainer>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
