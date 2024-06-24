import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';

import { NannyCardData } from '../../types';
import { HeartIcon, MapPinIcon, StarIcon } from '../../assets';
import { calculateAge } from '../../helpers';
import {
  LoginForm,
  MakeAnAppointmentPopup,
  Modal,
  NannyCardExtension
} from '../../components';
import { useAppContext } from '../../hooks';

import s from './NannyCard.module.css';

interface NannyCardProps {
  className?: string;
  isLiked?: boolean;
  defaultIsLiked?: boolean;
  onLikeClick?: (cardData: NannyCardData, isLiked: boolean) => void;
  cardData: NannyCardData;
}

const NannyCard = ({
  className,
  cardData,
  isLiked,
  defaultIsLiked = false,
  onLikeClick
}: NannyCardProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isReviewsOpened, setIsReviewsOpened] = useState(false);
  const [internalIsLiked, setIsLiked] = useState(defaultIsLiked);
  const { isLoggedIn } = useAppContext();
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const isLikedValue = isLiked ?? internalIsLiked;

  const handleOnLikeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    if (isLoggedIn) {
      if (onLikeClick) {
        onLikeClick(cardData, !isLiked);
      } else {
        setIsLiked(!isLiked);
      }
    } else {
      setIsLoginModalOpened(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoginModalOpened(false);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className={clsx(className, s.card)}>
        <ul className={s.sortingInfoList}>
          <li className={s.sortingInfoListItem}>
            <MapPinIcon />
            {cardData.location}
          </li>
          <li className={s.sortingInfoListItem}>
            <StarIcon />
            Rating: {cardData.rating}
          </li>
          <li className={s.sortingInfoListItem}>
            Price / 1 hour:{' '}
            <span className={s.moneySpan}>{cardData.price_per_hour}$</span>
          </li>
        </ul>
        <button
          className={clsx(s.likeButton, { [s.filledHeart]: isLikedValue })}
          type="button"
          onClick={handleOnLikeClick}
        >
          <HeartIcon width={26} height={26} />
        </button>
        <div className={s.avatarContainer}>
          <img
            className={s.avatar}
            src={cardData.avatar_url}
            alt={cardData.name}
            width={96}
            height={96}
          />
        </div>
        <div className={s.profileInfoAndReviewsContainer}>
          <div className={s.profileInfoContainer}>
            <p className={s.nannyLabel}>Nanny</p>
            <h3 className={s.nannyName}>{cardData.name}</h3>
            <ul className={s.profileInfoList}>
              <li className={s.profileInfoListItem}>
                Age: <span className={s.age}>{calculateAge(cardData.birthday)}</span>
              </li>
              <li className={s.profileInfoListItem}>
                Experience: <span className={s.experience}>{cardData.experience}</span>
              </li>
              <li className={s.profileInfoListItem}>
                Kids age: <span className={s.kidsAge}>{cardData.kids_age}</span>
              </li>
              <li className={s.profileInfoListItem}>
                Characters:{' '}
                <span className={s.characters}>{cardData.characters.join(', ')}</span>
              </li>
              <li className={s.profileInfoListItem}>
                Education: <span className={s.education}>{cardData.education}</span>
              </li>
            </ul>
            <p className={s.aboutParagraph}>{cardData.about}</p>

            {!isReviewsOpened && (
              <button
                className={s.readMoreButton}
                type="button"
                onClick={() => setIsReviewsOpened(true)}
              >
                Read more
              </button>
            )}
          </div>
          {isReviewsOpened && (
            <NannyCardExtension
              reviews={cardData.reviews}
              closeExtension={() => setIsReviewsOpened(false)}
              openModal={() => setIsModalOpened(true)}
            />
          )}
        </div>
      </div>

      <Modal
        className={s.modal}
        isOpened={isModalOpened}
        closeModal={() => setIsModalOpened(false)}
      >
        <MakeAnAppointmentPopup name={cardData.name} avatar={cardData.avatar_url} />
      </Modal>
      <Modal
        className={s.loginModal}
        isOpened={isLoginModalOpened}
        closeModal={() => setIsLoginModalOpened(false)}
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default NannyCard;
