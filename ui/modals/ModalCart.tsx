import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FiX } from 'react-icons/fi';
import style from './styles/modalCart.module.css';
import ReactDOM from 'react-dom';
import { ProductCart } from '../../product/components/ProductCart';
import { useStore } from '../../context/storeContext';
import { formatPrice } from '../../utils/formatPrice';
import { useApp } from '../../context/appContext';
type Props = {
  visible?: boolean;
  changeVisibility: () => void;
};

export const ModalCart = ({ visible, changeVisibility }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { modalIsActive } = useApp();
  const router = useRouter();

  const { productsCart, priceTotalCart, productCartIsEmpty, emptyCart } =
    useStore();

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      changeVisibility();
    }
  };

  const goToPay = () => {
    router.push('/pay');
    changeVisibility();
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalRoot = visible ? (
    <div className={style.overlay} ref={modalRef} onClick={closeModal}>
      <div className={style.modalCart}>
        <div className={style.modalCartHeader}>
          <p className={style.modalCartTitle}>Carrito</p>
          <button
            className={style.modalCartClose}
            onClick={() => changeVisibility()}
          >
            <FiX />
          </button>
        </div>
        <div className={style.modalCartContent}>
          <div className={style.modalCartListProduct}>
            {productsCart.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        </div>
        {productCartIsEmpty() ? (
          <div className={style.modalCartEmpty}>
            Todavia no has añadido productos al carrito.
          </div>
        ) : (
          <div className={style.modalFooter}>
            <div className={style.modalTotal}>
              <p>Total</p>
              <p>{formatPrice(priceTotalCart())}</p>
            </div>
            <button
              className={style.modalEmptyCartButton}
              onClick={() => emptyCart()}
            >
              Vaciar carrito
            </button>
            <button className={style.modalPayButton} onClick={goToPay}>
              Ir a pagar
            </button>
          </div>
        )}
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
      document.getElementById('modal-cart')!
    );
  } else {
    return null;
  }
};
