import { CartItemProps } from './cart.interface.js';
import { Product } from '../product/product.entity.js';
import { LOCAL_STORAGE_KEY } from '../constant/index.js';

export class CartItem implements CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  quantity: number;

  discountedPrice: number;

  constructor({ id, name, image, price, discount, quantity }: CartItemProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;

    this.discountedPrice = (this.price * (100 - this.discount)) / 100;
  }

  calcSubTotal = (): number => {
    return this.discount
      ? (this.quantity * (100 - this.discount) * this.price) / 100
      : this.quantity * this.price;
  };
}

export class Cart {
  cartItems: CartItem[];

  constructor(cartsItems: CartItem[]) {
    this.cartItems = cartsItems;
  }

  saveCartItems = (): void => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.CART,
      JSON.stringify(this.cartItems)
    );
  };

  addItem = (product: Product): void => {
    const cartItem = this.cartItems.find((cart) => cart.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      const cartItem = new CartItem({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        discount: product.discount,
        quantity: 1,
      });
      this.cartItems.push(cartItem);
    }
    this.saveCartItems();
  };

  removeItem = (id: number): void => {
    const indexToRemove = this.cartItems.findIndex((item) => item.id === id);

    if (indexToRemove !== -1) {
      this.cartItems.splice(indexToRemove, 1);
      this.saveCartItems();
    }
  };

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
