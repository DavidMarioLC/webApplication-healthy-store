import React, { ReactNode } from 'react';
import style from './styles/storeLayout.module.css';
import { Wrapper } from './Wrapper';
type Props = {
  children: ReactNode | ReactNode[];
};

export const StoreLayout = ({ children }: Props) => {
  return (
    <div className={style.storeLayout}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
