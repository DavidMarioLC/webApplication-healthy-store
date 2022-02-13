import style from '../styles/productCart.module.css';
import Image from 'next/image';
import { FiMinus, FiPlus } from 'react-icons/fi';

type Props = {};

export const ProductCart = (props: Props) => {
  return (
    <div className={style.productCart}>
      <div className={style.productCartImageWrapper}>
        <Image
          className={style.productCartImage}
          src={'/mangocard.png'}
          alt={'mango imagen'}
          title={'mango imagen'}
          width={100}
          height={100}
        />
      </div>
      <div className={style.productCartContent}>
        <div className={style.productCartHeader}>
          <p className={style.productCartName}>name</p>
          <p className={style.productCartTotal}>40 $</p>
        </div>
        <p className={style.productCartWeight}>250 g/ud 6,60 €/kg</p>
        <div className={style.productCartFooter}>
          <p className={style.productCartQuantity}>1 ud</p>
          <div className={style.productCartCartActions}>
            <button className={style.productCartDecreaseButton}>
              <FiMinus />
            </button>
            <button className={style.productCartIncreaseButton}>
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
