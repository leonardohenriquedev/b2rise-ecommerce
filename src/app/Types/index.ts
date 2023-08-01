import { ProductComponent } from '../Components/Product/product.component';

export type Filters = {
  search: string;
  color: string[];
  size: string[];
};

export type Product = {
  id: number;
  description: string;
  longDescription: string;
  price: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
