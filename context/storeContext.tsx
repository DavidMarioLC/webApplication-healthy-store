import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Product, ProductCart } from '../product/types';
import { totalPriceByProduct } from '../utils/product';

type Store = {
  productsOfferts: Product[];
  productsPopular: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  increaseCart: (product: Product) => void;
  decreaseCart: (product: Product) => void;
  isInTheCart: (id: string) => any;
  changeWeightToUnits: (id: string) => void;
  changeWeightToKg: (id: string) => void;
  getQuantityAndUnit: (id: string) => string;
  priceTotalCart: () => number;
  productCartSize: () => number;
};

const StoreContext = createContext({} as Store);

type Props = {
  children: ReactNode | ReactNode[];
};

export const StoreProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCart, setProductsCart] = useState<ProductCart[]>([]);

  const productsOfferts = products.filter(
    (product) => product.category === 'offerts'
  );
  const productsPopular = products.filter(
    (product) => product.category === 'popular'
  );

  const increaseCart = (product: Product) => {
    let existProductInCart = productsCart.find((p) => p.id === product.id);

    if (existProductInCart) {
      setProductsCart(
        productsCart.map((itemCart) =>
          itemCart.id === existProductInCart?.id
            ? { ...itemCart, quantity: existProductInCart.quantity + 1 }
            : itemCart
        )
      );
    } else {
      setProductsCart([...productsCart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseCart = (product: Product) => {
    const productSelect = productsCart.find((p) => p.id === product.id);

    if (productSelect?.quantity === 1) {
      return setProductsCart(productsCart.filter((p) => p.id !== product.id));
    } else {
      return setProductsCart(
        productsCart.map((itemCart) =>
          itemCart.id === product.id
            ? { ...itemCart, quantity: itemCart.quantity - 1 }
            : itemCart
        )
      );
    }
  };

  const isInTheCart = (id: string) => {
    return productsCart.find((p) => p.id === id);
  };

  const changeWeightToUnits = (id: string) => {
    const updatedProducts = productsCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          unit: 'ud',
        };
      }
      return product;
    });
    return setProductsCart(updatedProducts);
  };

  const changeWeightToKg = (id: string) => {
    const updatedProducts = productsCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          unit: 'kg',
        };
      }
      return product;
    });
    return setProductsCart(updatedProducts);
  };

  const getQuantityAndUnit = (id: string) => {
    const product = productsCart.find((p) => p.id === id);
    return `${product?.quantity} ${product?.unit}`;
  };

  const priceTotalCart = () => {
    let total = 0;
    productsCart.forEach((product) => {
      total += totalPriceByProduct(
        product.unit,
        product.priceUnit,
        product.priceKg,
        product.quantity
      );
    });

    return total;
  };

  const productCartSize = () => {
    return productsCart.length;
  };

  return (
    <StoreContext.Provider
      value={{
        productsPopular,
        productsOfferts,
        setProducts,
        increaseCart,
        decreaseCart,
        isInTheCart,
        changeWeightToUnits,
        changeWeightToKg,
        getQuantityAndUnit,
        priceTotalCart,
        productCartSize,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
