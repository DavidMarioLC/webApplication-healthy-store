import style from '../styles/products.module.css';
import { ListProductCard } from '../components/ListProductCard';
import { useStore } from '../../context/storeContext';

const PopularProducts = () => {
  const { productsPopular } = useStore();

  return (
    <section className={style.products} aria-label='Los más populares'>
      <h2 className={style.title}>Los alimentos más populares 🎉</h2>
      <ListProductCard products={productsPopular} />
    </section>
  );
};

export default PopularProducts;
