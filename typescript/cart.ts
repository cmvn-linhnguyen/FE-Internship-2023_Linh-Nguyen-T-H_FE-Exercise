import { CartItem, CartItemProps } from './cart.interface.js';
import { displayCartTable } from './cart.ui.js';

const data: CartItemProps[] = JSON.parse(localStorage.getItem('cart')) || [];

const cartItems: CartItemProps[] = data.map((item: CartItemProps) => {
  return new CartItem(item);
});

displayCartTable(cartItems);
