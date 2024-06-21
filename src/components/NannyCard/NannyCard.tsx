import clsx from 'clsx';
import { MouseEvent, useState } from 'react';

import { NannyCardData } from '../../types';
import { HeartIcon, MapPinIcon, StarIcon } from '../../assets';
import { calculateAge } from '../../helpers';
import { MakeAnAppointmentPopup, Modal, NannyCardExtension } from '../../components';

import s from './NannyCard.module.css';

interface NannyCardProps {
  className?: string;
  defaultIsLiked?: boolean;
  onLikeClick?: (cardData: NannyCardData, isLiked: boolean) => void;
  cardData: NannyCardData;
}

const NannyCard = ({
  className,
  cardData,
  defaultIsLiked = false,
  onLikeClick = () => {}
}: NannyCardProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isReviewsOpened, setIsReviewsOpened] = useState(false);
  const [isLiked, setIsLiked] = useState(defaultIsLiked);

  const handleOnLikeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setIsLiked(!isLiked);
    onLikeClick(cardData, !isLiked);
  };

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
          className={clsx(s.likeButton, { [s.filledHeart]: isLiked })}
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
    </>
  );
};

export default NannyCard;
