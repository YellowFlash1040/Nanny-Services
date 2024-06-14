import { useEffect, useState } from 'react';

import { Filters, LoadMoreButton, NannyCard, PageContainer } from '../../components';
import { filterNannies } from '../../helpers';
import { Filter, NannyCardData } from '../../types';

import { nanniesData } from '../../data';

import s from './NanniesPage.module.css';

const NanniesPage = () => {
  const [nannies, setNannies] = useState<NannyCardData[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>(Filter.ShowAll);
  const [pagesCount] = useState(nanniesData.length / 3 - 1);

  const handleLoadMoreButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const filteredNannies = filterNannies(
      nanniesData.map((n) => n),
      filter
    );
    setNannies(filteredNannies.slice(0, page * 3));
  }, [page, filter]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <main>
      <section className={s.nannysSection}>
        <PageContainer>
          <Filters className={s.filters} onChange={(filter) => setFilter(filter)} />
          {(nannies.length > 0 && (
            <ul className={s.nanniesList}>
              {nannies.map((data) => (
                <li key={data.name}>
                  <NannyCard cardData={data} />
                </li>
              ))}
            </ul>
          )) || <p className={s.nothingFoundLabel}>{'Nothing found :('}</p>}
          {nannies.length > 0 && page < pagesCount && (
            <LoadMoreButton
              className={s.loadMoreButton}
              onClick={handleLoadMoreButtonClick}
            />
          )}
        </PageContainer>
      </section>
    </main>
  );
};

export default NanniesPage;
