import { CreateModal, CloseModalButton } from '@components/Modal/styles';
import React, { FC, MouseEvent, MouseEventHandler, ReactNode, useCallback } from 'react';

interface Props {
  show: boolean;
  children: ReactNode;
  // children?: ReactNode | undefined;
  onCloseModal: MouseEventHandler;
}

const Modal: FC<Props> = ({ show, children, onCloseModal }) => {
  const stopPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
