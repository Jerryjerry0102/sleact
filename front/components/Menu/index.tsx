import React, { FC, MouseEventHandler, MouseEvent, ReactNode, useCallback, useState, CSSProperties } from 'react';
import { CloseModalButton, CreateMenu } from '@components/Menu/styles';

interface P {
  children?: ReactNode | undefined;
  show: boolean;
  onCloseModal: MouseEventHandler;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: FC<P> = ({ children, show, onCloseModal, style, closeButton }) => {
  const stopPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

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
