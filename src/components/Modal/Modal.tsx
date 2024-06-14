import { useEffect, ReactNode, MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { CrossIcon } from '../../assets';

import s from './Modal.module.css';

interface ModalProps {
  className?: string;
  children: ReactNode;
  closeModal: () => void;
  isOpened: boolean;
}

const Modal = ({ className, children, closeModal, isOpened }: ModalProps) => {
  const modalRef = useRef(document.querySelector('#modal'));

  const handleClickOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  return createPortal(
    <div
      className={clsx(s.backdrop, { [s.opened]: isOpened, 'visually-hidden': !isOpened })}
      onClick={handleClickOnBackdrop}
    >
      <div className={clsx(className, s.container)}>
        <button className={s.closeButton} type="button" onClick={() => closeModal()}>
          <CrossIcon width={32} height={32} />
        </button>
        {children}
      </div>
    </div>,
    modalRef.current!
  );
};

export default Modal;
