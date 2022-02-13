import style from '../styles/productCard.module.css';

import Image from 'next/image';
import { Product } from '../types';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useStore } from '../../context/storeContext';
import { formatPrice } from '../../utils/formatPrice';
import { useState } from 'react';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const {
    increaseCart,
    decreaseCart,
    isInTheCart,
    changeWeightToUnits,
    changeWeightToKg,
    getQuantityAndUnit,
  } = useStore();

  const [toggleUnit, setToggleUnit] = useState('ud');

  const { name, priceUnit, priceKg, weight, description, unit, image, id } =
    product;

  const changeToggleUnit = (id: string) => {
    if (toggleUnit === 'ud') {
      setToggleUnit('kg');
      return changeWeightToKg(id);
    }
    setToggleUnit('ud');
    changeWeightToUnits(id);
  };

  return (
    <div
      className={style.productCard}
      onClick={(e) => {
        console.log('click');
      }}
    >
      <div className={style.productCardImageWrapper}>
        <Image
          className={style.productCardImage}
          src={image}
          alt={name}
          title={name}
          width={500}
          height={500}
        />
      </div>
      <div className={style.productCardContent}>
        <p className={style.productCardName}>{name}</p>
        <p className={style.productCardWeight}>
          <span>{weight} g/ud</span>
          <span className={style.divisor}> </span>
          <span>{formatPrice(priceKg)}/kg</span>
        </p>

        <div className={style.productCardBody}>
          <p>
            {' '}
            {toggleUnit === 'ud'
              ? `${formatPrice(priceUnit)}/und`
              : `${formatPrice(priceKg)}/kg`}
          </p>
          {isInTheCart(id) ? (
            <div className={style.productCardWeightActions}>
              <button
                onClick={() => changeToggleUnit(id)}
                className={`${style.units__btn} ${
                  toggleUnit === 'ud' ? `${style.active}` : ``
                }`}
              >
                ud
              </button>
              <button
                onClick={() => changeToggleUnit(id)}
                className={`${style.units__btn} ${
                  toggleUnit === 'kg' ? `${style.active}` : ``
                }`}
              >
                kg
              </button>
            </div>
          ) : null}
        </div>
        {isInTheCart(id) ? (
          <div className={style.productCardFooter}>
            <p className={style.productCardQuantity}>
              {getQuantityAndUnit(id)}
            </p>
            <div className={style.productCardCartActions}>
              <button
                className={style.productCardDecreaseButton}
                onClick={() => decreaseCart(product)}
              >
                <FiMinus />
              </button>
              <button
                className={style.productCardIncreaseButton}
                onClick={() => increaseCart(product)}
              >
                <FiPlus />
              </button>
            </div>
          </div>
        ) : (
          <button
            className={style.button}
            onClick={() => increaseCart(product)}
          >
            Añadir
          </button>
        )}
      </div>
    </div>
  );
};
