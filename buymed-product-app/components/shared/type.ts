export interface Product {
  name: string;
  price: number;
  category: string;
  isPrescription: boolean;
  id: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}