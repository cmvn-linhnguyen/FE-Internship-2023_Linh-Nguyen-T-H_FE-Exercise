import { Cart, CartItem } from './cart.interface.js';
import { displayCartTable } from './cart.ui.js';
const data = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = data.map((item) => {
    return new CartItem(item);
});
const a = new Cart(cartItems);
console.log(a.cartItems);
console.log(a.calcTotalPrice());
console.log(a.calcTotalProduct());
displayCartTable(cartItems);
