import React, { useEffect, useState, useRef, HTMLAttributes } from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import style from './styles/modalProduct.module.css';
import PopularProducts from '../../product/screens/PopularProducts';
import { Product } from '../../product/types';
import { useApp } from '../../context/appContext';
import { useStore } from '../../context/storeContext';
import { formatPrice } from '../../utils/formatPrice';

type Props = {
  visible?: boolean;
  changeVisibility: () => void;
  product: Product;
};

export const ModalProduct = ({ visible, changeVisibility, product }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { increaseCart, decreaseCart, getQuantityAndUnit, isInTheCart } =
    useStore();
  const { modalIsActive } = useApp();

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      changeVisibility();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const { name, imageModal, id, weight, priceKg, priceUnit } = product;

  const modalRoot = visible ? (
    <div className={style.overlay}>
      <div className={style.modalContainer} ref={modalRef} onClick={closeModal}>
        <div className={style.modalProduct}>
          <div className={style.modalProductHeader}>
            <button
              className={style.modalProductCloseButton}
              onClick={() => changeVisibility()}
            >
              <FiX />
            </button>
            <h1 className={style.modalProductName}>{name}</h1>
            <div className={style.modalProductWeight}>
              <p>{weight} g/ud</p>
              <div className={style.modalProductDivisor}></div>
              <p>{formatPrice(priceKg)}/kg</p>
            </div>
            <div className={style.modalProductImage}>
              <Image
                src={imageModal}
                width={500}
                height={500}
                title={name}
                alt={name}
              />
            </div>
          </div>
          <div className={style.modalProductBody}>
            <div className={style.modalProductPriceAndButton}>
              <p className={style.modalProductPrice}>
                {formatPrice(priceUnit)}/ud
              </p>
              {isInTheCart(id) ? (
                <div className={style.modalProductActions}>
                  <button
                    className={style.modalProductActionsBtn}
                    onClick={(e) => decreaseCart(e, product)}
                  >
                    <FiMinus />
                  </button>
                  <span className={style.modalProductQuantity}>
                    {getQuantityAndUnit(id)}
                  </span>
                  <button
                    className={style.modalProductActionsBtn}
                    onClick={(e) => increaseCart(e, product)}
                  >
                    <FiPlus />
                  </button>
                </div>
              ) : (
                <button
                  className={style.modalProductButtonAdd}
                  onClick={(e) => increaseCart(e, product)}
                >
                  Añadir al carrito
                </button>
              )}
            </div>
            <p className={style.modalProductDescription}>
              El mango tiene forma ovalada con la piel de color variable de
              amarillo pálido a rojo intenso. La pulpa es pegajosa y su
              coloración varía desde amarillo a anaranjado. El sabor del mango
              maduro es dulce y bastante ácido cuando aún está verde. Tiene un
              elevado contenido en glúcidos. Su contenido en fibra no soluble es
              bajo, al igual que su valor calórico. El mango puede reducir el
              riesgo de contraer enfermedades ya que fortalece las funciones
              inmunológicas
            </p>
          </div>
          <div className={style.modalProductFooter}>
            <PopularProducts />
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    if (modalIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    return ReactDOM.createPortal(
      modalRoot,
      document.getElementById('modal-root')!
    );
  } else {
    return null;
  }
};
