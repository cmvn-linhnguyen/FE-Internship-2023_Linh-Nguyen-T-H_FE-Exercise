import { Cart } from './entity.js';
import { displayCartTable } from './renderTable.js';

const data = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = data.map((item) => {
  return new Cart(item);
});

displayCartTable(cartItems);
