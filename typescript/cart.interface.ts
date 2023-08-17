import { ProductProps } from './product.interface';

export interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number;
}

export class CartItem implements CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;

  constructor({ id, name, image, price, discount, quantity }: CartItemProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
  }
}
