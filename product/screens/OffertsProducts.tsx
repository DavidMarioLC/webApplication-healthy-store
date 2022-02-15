import style from '../styles/products.module.css';
import { ListProductCard } from '../components/ListProductCard';
import { useStore } from '../../context/storeContext';

const OffersProducts = () => {
  const { productsOfferts } = useStore();

  return (
    <section className={style.products} aria-label='Ofertas'>
      <h2 className={style.title}>Grandes ofertas de la semana 🔥</h2>
      <ListProductCard products={productsOfferts} />
    </section>
  );
};

export default OffersProducts;
