import style from '../styles/productCart.module.css';
import Image from 'next/image';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { IProductCart } from '../types';
import { useStore } from '../../context/storeContext';
import { formatPrice } from '../../utils/formatPrice';
import { totalPriceByProduct } from '../../utils/product';
type Props = {
  product: IProductCart;
};

export const ProductCart = ({ product }: Props) => {
  const { getQuantityAndUnit, increaseCart, decreaseCart } = useStore();
  const { name, image, priceKg, priceUnit, quantity, weight, id, unit } =
    product;
  return (
    <div className={style.productCart}>
      <div className={style.productCartImageWrapper}>
        <Image
          className={style.productCartImage}
          src={image}
          alt={name}
          title={name}
          width={100}
          height={100}
        />
      </div>
      <div className={style.productCartContent}>
        <div className={style.productCartHeader}>
          <p className={style.productCartName}>{name}</p>
          <p className={style.productCartTotal}>
            {formatPrice(
              totalPriceByProduct(unit, priceUnit, priceKg, quantity)
            )}
          </p>
        </div>
        <div className={style.productCartWeight}>
          <p>{weight} g/ud</p>
          <div className={style.productCartDivider}></div>
          <p> {formatPrice(priceKg)}/kg</p>
        </div>
        <div className={style.productCartFooter}>
          <p className={style.productCartQuantity}>{getQuantityAndUnit(id)}</p>
          <div className={style.productCartCartActions}>
            <button
              className={style.productCartDecreaseButton}
              onClick={(event) => decreaseCart(event, product)}
            >
              <FiMinus />
            </button>
            <button
              className={style.productCartIncreaseButton}
              onClick={(event) => increaseCart(event, product)}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
