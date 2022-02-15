import React, { ReactNode } from 'react';
import style from './styles/wrapper.module.css';
type Props = {
  children: ReactNode | ReactNode[];
};

export const Wrapper = ({ children }: Props) => {
  return <div className={style.wrapper}>{children}</div>;
};
