import { CartItem } from './cart.interface.js';
import { displayCartTable } from './cart.ui.js';
const data = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = data.map((item) => {
    return new CartItem(item);
});
displayCartTable(cartItems);
