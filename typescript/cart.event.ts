import { CartItemProps } from './cart.interface.js';
import { ProductProps } from './product.interface.js';

//Count the number of products in the cart
export const updateCartQty = (): void => {
  const qtyElem: HTMLElement = document.getElementById('cart-quantity');
  const cartItems: CartItemProps[] =
    JSON.parse(localStorage.getItem('cart')) || [];

  const totalQty: number = cartItems.reduce(
    (sum: number, item: CartItemProps) => sum + item.quantity,
    0
  );
  qtyElem.innerHTML = totalQty.toString();
};

//Add product to cart
export const addToCart = (product: ProductProps): void => {
  const carts: Array<CartItemProps> =
    JSON.parse(localStorage.getItem('cart')) || [];
  const cartItem: CartItemProps = carts.filter(
    (item: CartItemProps) => item.id === product.id
  )[0];

  if (!cartItem) {
    carts.push({ ...product, quantity: 1 });
  } else {
    cartItem.quantity += 1;
  }

  localStorage.setItem('cart', JSON.stringify(carts));
  updateCartQty();
};

export const addCartItemEvent = (
  cartTable: Element,
  cartItems: CartItemProps[]
): void => {
  const tableRows = cartTable.querySelectorAll('.table-row');
  tableRows.forEach((row: Element, index: number) => {
    const decreaseButton: Element = row.querySelector('.decrease');
    const increaseButton: Element = row.querySelector('.increase');
    const deleteButton: Element = row.querySelector('.delete-button');
    const quantityElement: Element = row.querySelector('.item-quantity');
    const priceElement: Element = row.querySelector('.item-price');

    const updateQuantity = (change: number) => {
      let quantity: number = parseInt(quantityElement.textContent) + change;

      quantityElement.textContent = '' + quantity;
      priceElement.textContent = `$${(
        quantity * cartItems[index].price
      ).toFixed(2)}`;
      cartItems[index].quantity = quantity;
      updateCartInfo(cartItems);

      const decreaseButton: HTMLButtonElement = document.querySelector(
        `button.quantity-update.decrease.pro-${cartItems[index].id}`
      );
      decreaseButton.disabled = quantity === 1;
    };

    decreaseButton.addEventListener('click', () => updateQuantity(-1));
    increaseButton.addEventListener('click', () => updateQuantity(1));

    deleteButton.addEventListener('click', () => {
      cartItems.splice(index, 1);
      updateCartInfo(cartItems);
      row.remove();
    });
  });
};

const updateCartInfo = (cartItems: CartItemProps[]): void => {
  updateLocalStorage(cartItems);
  updateTotalPrice(cartItems);
  updateCartQty();
};

const updateTotalPrice = (carts: CartItemProps[]): void => {
  let totalPriceElement = document.querySelector('.total-price');
  const totalPrice = carts.reduce((sum, i) => {
    return sum + i.price * i.quantity;
  }, 0);
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
};

const updateLocalStorage = (cartItems: CartItemProps[]): void => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};
