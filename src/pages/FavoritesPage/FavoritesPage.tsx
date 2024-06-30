import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  DataLoader,
  Filters,
  LoadMoreButton,
  NannyCard,
  PageContainer
} from '../../components';
import { Filter, NannyCardData } from '../../types';
import { filterNannies } from '../../helpers';
import { useAppContext } from '../../hooks';
import { fetchCollection } from '../../fireBase';
import {
  dataCollectionName,
  numberOfNanniesPerPage,
  toastOptionsError
} from '../../constants';

import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const { userData } = useAppContext();
  const likedNannies = useRef<string[]>([]);

  const [nannies, setNannies] = useState<NannyCardData[]>([]);
  const [pagiNatedNannies, setPaginatedNannies] = useState<NannyCardData[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>(Filter.ShowAll);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleLoadMoreButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleOnLikeClick = (nanny: NannyCardData, isLiked: boolean) => {
    if (!isLiked) {
      likedNannies.current = likedNannies.current.filter((n) => n !== nanny.name);
      localStorage.setItem(
        `likedNannies_${userData.id}`,
        JSON.stringify(likedNannies.current)
      );
      setNannies((prev) => prev.filter((n) => n.name !== nanny.name));
    }
  };

  useEffect(() => {
    const fetchNannies = async () => {
      setIsLoading(true);
      try {
        const data = (await fetchCollection(dataCollectionName)) as NannyCardData[];
        setNannies(
          likedNannies.current.map((n) => data.find((nanny) => nanny.name === n)!)
        );
      } catch (error) {
        toast.error('Something went wrong during data fetching', toastOptionsError);
      } finally {
        setIsLoading(false);
      }
    };

    if (userData.id !== '') {
      likedNannies.current = JSON.parse(
        localStorage.getItem(`likedNannies_${userData.id}`) || '[]'
      );
      fetchNannies();
    } else {
      navigate('/nannies', { replace: true });
    }
  }, [userData.id, navigate]);

  useEffect(() => {
    const filteredNannies = filterNannies(
      nannies.map((n) => n),
      filter
    );
    setPaginatedNannies(filteredNannies.slice(0, page * numberOfNanniesPerPage));
    setPagesCount(nannies.length / numberOfNanniesPerPage);
  }, [page, filter, nannies]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <main>
      <section className={s.nannysSection}>
        <PageContainer className={s.container}>
          <Filters className={s.filters} onChange={(filter) => setFilter(filter)} />
          {!isLoading && pagiNatedNannies.length > 0 && (
            <ul className={s.nanniesList}>
              {pagiNatedNannies.map((data) => (
                <li key={filter + data.name}>
                  <NannyCard
                    cardData={data}
                    isLiked={true}
                    onLikeClick={handleOnLikeClick}
                  />
                </li>
              ))}
            </ul>
          )}
          {!isLoading && pagiNatedNannies.length === 0 && (
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

export default FavoritesPage;
