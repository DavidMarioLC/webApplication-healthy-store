export interface Product {
  id: string;
  name: string;
  priceUnit: number;
  priceKg: number;
  unit: string;
  weight: string;
  description: string;
  image: string;
  imageModal: string;
  category: string;
}

export interface IProductCart extends Product {
  quantity: number;
}
