import { useEffect, useRef, useState } from 'react';

import { Filters, LoadMoreButton, NannyCard, PageContainer } from '../../components';
import { Filter, NannyCardData } from '../../types';
import { filterNannies } from '../../helpers';

import { nanniesData } from '../../data';

import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const likedNannies = useRef<string[]>(
    JSON.parse(localStorage.getItem('likedNannies') || '[]')
  );

  const [nannies, setNannies] = useState<NannyCardData[]>([]);
  const [pagiNatedNannies, setPaginatedNannies] = useState<NannyCardData[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>(Filter.ShowAll);
  const [pagesCount, setPagesCount] = useState(nannies.length / 3);

  const handleLoadMoreButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleOnLikeClick = (nanny: NannyCardData, isLiked: boolean) => {
    if (!isLiked) {
      likedNannies.current = likedNannies.current.filter((n) => n !== nanny.name);
      localStorage.setItem('likedNannies', JSON.stringify(likedNannies.current));
      setNannies((prev) => prev.filter((n) => n.name !== nanny.name));
    }
  };

  useEffect(() => {
    const data: NannyCardData[] = likedNannies.current.map(
      (n) => nanniesData.find((nanny) => nanny.name === n)!
    );
    setNannies(data);
  }, []);

  useEffect(() => {
    const filteredNannies = filterNannies(
      nannies.map((n) => n),
      filter
    );
    setPaginatedNannies(filteredNannies.slice(0, page * 3));
    setPagesCount(nannies.length / 3);
  }, [page, filter, nannies]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <main>
      <section className={s.nannysSection}>
        <PageContainer>
          <Filters className={s.filters} onChange={(filter) => setFilter(filter)} />
          {(pagiNatedNannies.length > 0 && (
            <ul className={s.nanniesList}>
              {pagiNatedNannies.map((data) => (
                <li key={filter + data.name}>
                  <NannyCard
                    cardData={data}
                    onLikeClick={handleOnLikeClick}
                    defaultIsLiked={true}
                  />
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

export default FavoritesPage;
