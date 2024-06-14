import { LoadMoreButton, NannyCard } from '../../components';
import s from './HomePage.module.css';

import { nanniesData } from '../../data';

const HomePage = () => {
  const nannies = nanniesData.slice(0, 3);

  return (
    <>
      {/* <section className={s.helloSection}>Home Page</section> */}
      <section className={s.nanniesSection}>
        <ul className={s.nanniesList}>
          {nannies.map((data) => (
            <NannyCard cardData={data} />
          ))}
        </ul>
        <LoadMoreButton />
      </section>
    </>
  );
};

export default HomePage;
