import { PRODUCT_STATUS } from '../constant/index.js';

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status: PRODUCT_STATUS.AVAILABLE | PRODUCT_STATUS.OUT_OF_STOCK;
}
