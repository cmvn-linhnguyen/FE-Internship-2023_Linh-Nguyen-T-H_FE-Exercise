import { ProductProps } from './product.interface';

export interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number;
  calcSubTotal?: () => number;
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

  calcSubTotal = (): number => {
    return this.discount
      ? (this.quantity * (100 - this.discount) * this.price) / 100
      : this.quantity * this.price;
  };
}

export class Cart {
  cartItems: CartItemProps[];

  constructor(cartsItems: CartItemProps[]) {
    this.cartItems = cartsItems;
  }

  calcTotalProduct = (): number => {
    return this.cartItems.reduce((accumulator, currentCartItem) => {
      return accumulator + currentCartItem.quantity;
    }, 0);
  };

  calcTotalPrice = (): number => {
    return this.cartItems.reduce((accumulator, currentCartItem) => {
      return accumulator + currentCartItem.calcSubTotal();
    }, 0);
  };
}
