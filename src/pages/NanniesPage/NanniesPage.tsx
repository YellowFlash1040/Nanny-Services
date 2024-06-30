import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  DataLoader,
  Filters,
  LoadMoreButton,
  NannyCard,
  PageContainer
} from '../../components';
import { filterNannies } from '../../helpers';
import { Filter, NannyCardData } from '../../types';
import { fetchCollection } from '../../fireBase';
import {
  dataCollectionName,
  numberOfNanniesPerPage,
  toastOptionsError
} from '../../constants';
import { useAppContext } from '../../hooks';

import s from './NanniesPage.module.css';

const NanniesPage = () => {
  const [nannies, setNannies] = useState<NannyCardData[]>([]);
  const [filteredNannies, setFilteredNannies] = useState<NannyCardData[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>(Filter.ShowAll);
  const [pagesCount, setPagesCount] = useState(0);
  const { userData } = useAppContext();
  const [likedNannies, setLikedNannies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadMoreButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleOnLikeClick = (nanny: NannyCardData, isLiked: boolean) => {
    if (isLiked) {
      setLikedNannies([...likedNannies, nanny.name]);
    } else {
      setLikedNannies(likedNannies.filter((n) => n !== nanny.name));
    }
  };

  useEffect(() => {
    const fetchNannies = async () => {
      setIsLoading(true);
      try {
        const data = (await fetchCollection(dataCollectionName)) as NannyCardData[];
        setNannies(data);
      } catch (error) {
        toast.error('Something went wrong during data fetching', toastOptionsError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNannies();
  }, []);

  useEffect(() => {
    const result = filterNannies(
      nannies.map((n) => n),
      filter
    );
    setFilteredNannies(result.slice(0, page * numberOfNanniesPerPage));
    setPagesCount(result.length / numberOfNanniesPerPage);
  }, [page, filter, nannies]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    if (userData.id === '') {
      setLikedNannies([]);
    } else {
      const data = JSON.parse(
        localStorage.getItem(`likedNannies_${userData.id}`) || '[]'
      );
      setLikedNannies(data);
    }
  }, [userData.id]);

  useEffect(() => {
    if (userData.id !== '') {
      localStorage.setItem(`likedNannies_${userData.id}`, JSON.stringify(likedNannies));
    }
  }, [likedNannies, userData.id]);

  return (
    <main>
      <section className={s.nannysSection}>
        <PageContainer className={s.container}>
          <Filters className={s.filters} onChange={(filter) => setFilter(filter)} />
          {!isLoading && filteredNannies.length > 0 && (
            <ul className={s.nanniesList}>
              {filteredNannies.map((data) => (
                <li key={filter + data.name}>
                  <NannyCard
                    cardData={data}
                    isLiked={likedNannies.some((nanny) => nanny === data.name)}
                    onLikeClick={handleOnLikeClick}
                  />
                </li>
              ))}
            </ul>
          )}
          {!isLoading && filteredNannies.length === 0 && (
            <p className={s.nothingFoundLabel}>{'Nothing found :('}</p>
          )}
          {isLoading && (
            <div className={s.dataLoader}>
              <DataLoader />
            </div>
          )}
          {page < pagesCount && (
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
