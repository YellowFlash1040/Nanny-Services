import clsx from 'clsx';

import { Button, Reviews } from '../../components';
import { Review } from '../../types';

import s from './NannyCardExtension.module.css';

interface NannyCardExtensionProps {
  className?: string;
  reviews: Review[];
  closeExtension: () => void;
  openModal: () => void;
}

const NannyCardExtension = ({
  className,
  reviews,
  closeExtension,
  openModal
}: NannyCardExtensionProps) => {
  return (
    <div className={clsx(className, s.extensionContainer)}>
      <Reviews reviews={reviews} className={s.reviews} />
      <div className={s.buttonsContainer}>
        <Button className={s.makeAnAppointmentButton} onClick={() => openModal()}>
          Make an appointment
        </Button>
        <button
          className={s.readLessButton}
          type="button"
          onClick={() => closeExtension()}
        >
          Read less
        </button>
      </div>
    </div>
  );
};

export default NannyCardExtension;
