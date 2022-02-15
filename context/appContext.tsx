import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Product } from '../product/types';
type App = {
  visibleModalProduct: boolean;
  visibleModalCart: boolean;
  changeVisibilityModalProduct: () => void;
  changeVisibilityModalCart: () => void;
  setProductSelected: Dispatch<SetStateAction<Product>>;
  productSelected: Product;
  modalIsActive: boolean;
};

type Props = {
  children: ReactNode | ReactNode[];
};

export const AppContext = createContext({} as App);

export const AppProvider = ({ children }: Props) => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [productSelected, setProductSelected] = useState<Product>({
    id: '',
    name: '',
    priceUnit: 0,
    priceKg: 0,
    unit: '',
    weight: '',
    description: '',
    image: '',
    imageModal: '',
    category: '',
  });

  const [visibleModalProduct, setVisibleModalProduct] =
    useState<boolean>(false);

  const [visibleModalCart, setVisibleModalCart] = useState(false);

  const changeVisibilityModalProduct = () => {
    setVisibleModalProduct(!visibleModalProduct);
    setModalIsActive(!modalIsActive);
  };

  const changeVisibilityModalCart = () => {
    setVisibleModalCart(!visibleModalCart);
    setModalIsActive(!modalIsActive);
  };

  return (
    <AppContext.Provider
      value={{
        visibleModalProduct,
        visibleModalCart,
        changeVisibilityModalProduct,
        changeVisibilityModalCart,
        setProductSelected,
        productSelected,
        modalIsActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
