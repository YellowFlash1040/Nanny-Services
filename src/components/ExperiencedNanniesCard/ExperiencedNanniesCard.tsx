import clsx from 'clsx';

import { CheckmarkIcon } from '../../assets';

import s from './ExperiencedNanniesCard.module.css';

interface ExperiencedNanniesCardProps {
  className?: string;
}

const ExperiencedNanniesCard = ({ className }: ExperiencedNanniesCardProps) => {
  return (
    <div className={clsx(className, s.card)}>
      <div className={s.checkMarkContainer}>
        <CheckmarkIcon width={30} height={30} />
      </div>
      <div className={s.infoContainer}>
        <p className={s.experiencedNanniesLabel}>Experienced nannies</p>
        <p className={s.nanniesAmount}>15,000</p>
      </div>
    </div>
  );
};

export default ExperiencedNanniesCard;
