import { SortByDropDown } from '../../components';
import s from './NanniesPage.module.css';

const NanniesPage = () => {
  return (
    <>
      <section className={s.helloSection}>
        <p>Nannies page</p>
        <SortByDropDown />
      </section>
    </>
  );
};

export default NanniesPage;
