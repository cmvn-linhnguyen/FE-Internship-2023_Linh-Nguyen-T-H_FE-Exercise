import { getCartItems } from './../utils/index.js';
import { CartItem } from './cart.entity.js';
import { displayCartTable } from './cart.ui.js';
const data = getCartItems();
const cartItems = data.map((item) => {
    return new CartItem(item);
});
displayCartTable(cartItems);
