import React from 'react';
import Image from 'next/image';
import style from './styles/header.module.css';
import { FiShoppingBag, FiMapPin } from 'react-icons/fi';
import { Wrapper } from './Wrapper';
import { useStore } from '../context/storeContext';
import { formatPrice } from '../utils/formatPrice';

export const Header = () => {
  const { productCartSize, priceTotalCart } = useStore();
  return (
    <header className={style.header}>
      <Wrapper>
        <div className={style.headerContent}>
          <Image
            src='/logo.svg'
            alt='Healthy Store'
            title='Healthy Store'
            width='148'
            height='24'
          />
          <div className={style.ubicationAndCard}>
            <button className={style.ubication}>
              <FiMapPin className={style.ubicationIcon} />
              <p className={style.ubicationText}> Selecciona tu ubicación</p>
            </button>
            <div className={style.cart}>
              <div className={style.amount}>
                <FiShoppingBag className={style.amountIcon} />{' '}
                {productCartSize()}
              </div>
              <div className={style.divider}></div>
              <div className={style.price}>{formatPrice(priceTotalCart())}</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
