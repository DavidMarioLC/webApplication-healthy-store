import style from '../styles/listProductCard.module.css';
import { ProductCard } from './ProductCard';
import { Product, ProductCart } from '../types';

type Props = {
  products: Product[];
};

export const ListProductCard = ({ products }: Props) => {
  return (
    <div className={style.listProductsCard}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
