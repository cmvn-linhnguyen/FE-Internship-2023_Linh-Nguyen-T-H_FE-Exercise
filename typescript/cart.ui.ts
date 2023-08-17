import { addCartItemEvent, updateCartQty } from './cart.event.js';
import { CartItemProps } from './cart.interface.js';

const renderTable = (cartItems: CartItemProps[]): HTMLTableElement => {
  const cartTable: HTMLTableElement = document.createElement('table');
  cartTable.setAttribute('class', 'cart-table');
  let tableInnerHtml = `<tr class="row">
    <th class="col col-2">Id</th>
    <th class="col col-2">Image</th>
    <th class="col col-2">Name</th>
    <th class="col col-2">Price</th>
    <th class="col col-2">Quantity</th>
    <th class="col col-2"></th>
  </tr>`;

  for (let item of cartItems) {
    tableInnerHtml += `<tr class="table-row row flex-center">
      <td class="col col-2">${item.id}</td>
      <td class="col col-2">${item.name}</td>
      <td class="col col-2">
        <img
          class="img cart-item-img"
          src="${item.image}"
          alt="${item.name}"
        />
      </td>
      <td class="col col-2">
        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
      </td>
      <td class="col col-2">
        <div class="flex-row flex-center table-qty-wrap">
          <button class="quantity-update decrease pro-${item.id}" ${
      item.quantity === 1 ? `disabled` : ``
    }>-</button>
          <p class="item-quantity">${item.quantity}</p>
          <button class="quantity-update increase pro-${item.id}">+</button>
        </div>
      </td>
      <td class="col col-2">
        <button class="delete-button">Delete</button>
      </td>
    </tr>`;
  }

  cartTable.innerHTML = tableInnerHtml;
  addCartItemEvent(cartTable, cartItems);

  return cartTable;
};

const renderTotalPrice = (price: number): HTMLElement => {
  const totalPriceWrap = document.createElement('div');
  totalPriceWrap.setAttribute('class', 'flex-row total-price-wrap');
  totalPriceWrap.innerHTML = `
  <p class="total-price-title">Total Price:</p>
  <p class="total-price">$${price}</p>`;

  return totalPriceWrap;
};

export const displayCartTable = (carts: CartItemProps[]): void => {
  updateCartQty();
  const cartContent = document.getElementsByClassName(
    'section-cart-content'
  )[0];

  const cartTable = renderTable(carts);

  const totalPrice = carts.reduce((sum, i) => {
    return sum + i.price * i.quantity;
  }, 0);

  const totalPriceElement = renderTotalPrice(+totalPrice.toFixed(2));
  cartContent.appendChild(cartTable);
  cartContent.appendChild(totalPriceElement);
};
