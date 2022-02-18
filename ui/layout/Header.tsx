import React from "react";
import Image from "next/image";
import style from "./styles/header.module.css";
import { FiShoppingBag, FiMapPin } from "react-icons/fi";
import { Wrapper } from "./Wrapper";
import { useStore } from "../../context/storeContext";
import { formatPrice } from "../../utils/formatPrice";
import { useApp } from "../../context/appContext";

export const Header = () => {
  const { productCartSize, priceTotalCart } = useStore();
  const { changeVisibilityModalCart } = useApp();
  const openModalCart = () => changeVisibilityModalCart();
  return (
    <header className={style.header}>
      <Wrapper>
        <div className={style.headerContent}>
          <Image
            className={style.imageLogo}
            src="/logo.png"
            alt="Healthy Store"
            title="Healthy Store"
            width="148"
            height="24"
          />
          <div className={style.ubicationAndCard}>
            <button className={style.ubication}>
              <FiMapPin className={style.ubicationIcon} />
              <p className={style.ubicationText}> Selecciona tu ubicación</p>
            </button>
            <button className={style.cart} onClick={openModalCart}>
              <div className={style.amount}>
                <FiShoppingBag className={style.amountIcon} />{" "}
                {productCartSize()}
              </div>
              <div className={style.divider}></div>
              <div className={style.price}>{formatPrice(priceTotalCart())}</div>
            </button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
