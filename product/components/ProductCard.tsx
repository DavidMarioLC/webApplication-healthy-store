import style from '../styles/productCard.module.css';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { formatPrice } from '../../utils/formatPrice';
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../types';
import { useStore } from '../../context/storeContext';
import { useApp } from '../../context/appContext';

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

  const {
    changeVisibilityModalProduct,
    setProductSelected,
    visibleModalProduct,
  } = useApp();

  const [toggleUnit, setToggleUnit] = useState('ud');

  const changeToggleUnit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.stopPropagation();
    if (toggleUnit === 'ud') {
      setToggleUnit('kg');
      return changeWeightToKg(id);
    }
    setToggleUnit('ud');
    changeWeightToUnits(id);
  };

  const {
    name,
    priceUnit,
    priceKg,
    weight,
    description,
    unit,
    image,
    imageModal,
    id,
  } = product;

  const showModal = () => {
    if (visibleModalProduct) {
      setProductSelected(product);
    } else {
      setProductSelected(product);
      changeVisibilityModalProduct();
    }
  };

  return (
    <>
      <div className={style.productCard} onClick={showModal}>
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
              {toggleUnit === 'ud'
                ? `${formatPrice(priceUnit)}/und`
                : `${formatPrice(priceKg)}/kg`}
            </p>
            {isInTheCart(id) ? (
              <div className={style.productCardWeightActions}>
                <button
                  onClick={(event) => changeToggleUnit(event, id)}
                  className={`${style.units__btn} ${
                    toggleUnit === 'ud' ? `${style.active}` : ``
                  }`}
                >
                  ud
                </button>
                <button
                  onClick={(event) => changeToggleUnit(event, id)}
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
                  onClick={(event) => decreaseCart(event, product)}
                >
                  <FiMinus />
                </button>
                <button
                  className={style.productCardIncreaseButton}
                  onClick={(event) => increaseCart(event, product)}
                >
                  <FiPlus />
                </button>
              </div>
            </div>
          ) : (
            <button
              className={style.button}
              onClick={(event) => increaseCart(event, product)}
            >
              Añadir
            </button>
          )}
        </div>
      </div>
    </>
  );
};
