import clsx from 'clsx';

import { NannyCardData } from '../../types';

import s from './NannyCard.module.css';
import { HeartIcon, MapPinIcon, StarIcon } from '../../assets';
import { calculateAge } from '../../helpers';

interface NannyCardProps {
  className?: string;
  cardData: NannyCardData;
}

const NannyCard = ({ className, cardData }: NannyCardProps) => {
  return (
    <div className={clsx(className, s.card)}>
      <ul className={s.mainInfoList}>
        <li className={s.mainInfoListItem}>
          <MapPinIcon />
          {cardData.location}
        </li>
        <li className={s.mainInfoListItem}>
          <StarIcon />
          Rating: {cardData.rating}
        </li>
        <li className={s.mainInfoListItem}>
          Price / 1 hour: <span className={s.moneySpan}>{cardData.price_per_hour}$</span>
        </li>
      </ul>
      <button className={s.likeButton} type="button">
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

        <button className={s.readMoreButton}>Read more</button>
      </div>
    </div>
  );
};

export default NannyCard;
