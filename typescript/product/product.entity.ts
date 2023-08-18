import { PRODUCT_STATUS } from '../constant/index.js';
import { ProductProps } from './product.interface.js';

export class Product implements ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: PRODUCT_STATUS.AVAILABLE | PRODUCT_STATUS.OUT_OF_STOCK;

  discountedPrice: number;

  constructor({ id, name, image, price, discount, status }: ProductProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.status = status;

    this.discountedPrice = (this.price * (100 - this.discount)) / 100;
  }
}
