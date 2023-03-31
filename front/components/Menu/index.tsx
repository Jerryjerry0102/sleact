import React, { FC, MouseEventHandler, MouseEvent, ReactNode, useCallback, useState } from 'react';
import { CloseModalButton, CreateMenu } from '@components/Menu/styles';

interface P {
  children?: ReactNode | undefined;
  style: any;
  show: boolean;
  onCloseModal: MouseEventHandler;
  closeButton?: boolean;
}

const Menu: FC<P> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
