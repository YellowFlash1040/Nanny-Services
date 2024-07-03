import { useEffect, ReactNode, MouseEvent, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import { CrossIcon } from '../../assets';
import { modalWindowPadding, transitionTime } from '../../constants';

import s from './Modal.module.css';

interface ModalProps {
  className?: string;
  children: ReactNode;
  closeModal: () => void;
  isOpened: boolean;
}

const Modal = ({ className, children, closeModal, isOpened }: ModalProps) => {
  const modalRef = useRef(document.querySelector('#modal'));
  const nodeRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      const containerHeight =
        contentContainerRef.current?.getBoundingClientRect().height || 0;
      setIsOverflow(containerHeight + modalWindowPadding * 2 > window.innerHeight);
    };

    if (isOpened) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';

      handleResize();
      window.addEventListener('resize', handleResize);
    } else {
      document.body.style.paddingRight = '0';
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpened]);

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpened}
      timeout={transitionTime}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: s.modalEnter,
        enterActive: s.modalEnterActive,
        exit: s.modalExit,
        exitActive: s.modalExitActive
      }}
    >
      <div
        className={clsx(
          s.backdrop,
          isOverflow ? s.backdropOverflow : s.backdropNoOverflow
        )}
        onClick={handleClickOnBackdrop}
        ref={nodeRef}
      >
        <div className={clsx(className, s.container)} ref={contentContainerRef}>
          <button className={s.closeButton} type="button" onClick={() => closeModal()}>
            <CrossIcon width={32} height={32} />
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>,
    modalRef.current!
  );
};

export default Modal;
