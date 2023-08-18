import { ProductProps } from '../product/product.interface.js';
import { Cart } from './cart.entity.js';

export interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number;
  calcSubTotal?: () => number;
}

export interface CartProps {
  cartItems: CartItemProps[];
  getCartItems: () => Cart;
  saveCartItems: () => void;
  addItem: () => void;
  removeItem: () => void;
  calcTotalProduct: () => number;
  calcTotalPrice: () => number;
}
