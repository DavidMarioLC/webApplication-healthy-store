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

export interface ProductCart extends Product {
  quantity: number;
}
