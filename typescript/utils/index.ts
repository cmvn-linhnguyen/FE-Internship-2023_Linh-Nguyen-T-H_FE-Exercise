import { CartItem } from '../cart/cart.entity.js';
import { LOCAL_STORAGE_KEY } from '../constant/index.js';

export const getCartItems = (): CartItem[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.CART)) || [];
};
