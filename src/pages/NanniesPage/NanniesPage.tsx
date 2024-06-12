import { Filters, PageContainer } from '../../components';

import s from './NanniesPage.module.css';

const NanniesPage = () => {
  return (
    <>
      <section className={s.nannysSection}>
        <PageContainer>
          <Filters />
        </PageContainer>
      </section>
    </>
  );
};

export default NanniesPage;
