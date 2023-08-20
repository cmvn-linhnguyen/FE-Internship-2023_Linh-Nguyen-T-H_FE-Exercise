import { Cart, CartItem } from './cart.entity.js';

export const renderTable = (cartItems: CartItem[]): HTMLTableElement => {
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

  cartItems.forEach((item) => {
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
        ${
          item.discount
            ? `<div class="discount">
        <p class="discountedPrice">$${item.discountedPrice.toFixed(2)}</p>
        <p class="originalPrice">$${item.price.toFixed(2)}</p>
        </div>`
            : `<p>$${item.price.toFixed(2)}</p>`
        }
        <p class="item-price">
        Total: $${item.calcSubTotal().toFixed(2)}
      </p>
      
        </td>
        <td class="col col-2">
          <div class="flex-row flex-center table-quantity-wrap">
            <button class="quantity-update decrease pro-${item.id}" ${
      item.quantity === 1 ? `disabled` : ``
    }>-</button>
            <p class="item-quantity">${item.quantity}</p>
            <button class="quantity-update increase pro-${item.id}">+</button>
          </div>
        </td>
        <td class="col col-2">
          <button class="delete-button" id="btn-${item.id}">Delete</button>
        </td>
      </tr>`;
  });

  cartTable.innerHTML = tableInnerHtml;
  addCartItemEvent(cartTable, cartItems);

  return cartTable;
};

export const addCartItemEvent = (
  cartTable: Element,
  cartItems: CartItem[]
): void => {
  const tableRows = cartTable.querySelectorAll('.table-row');
  tableRows.forEach((row: Element, index: number) => {
    const decreaseButton: Element = row.querySelector('.decrease');
    const increaseButton: Element = row.querySelector('.increase');
    const deleteButton: Element = row.querySelector('.delete-button');
    const quantityElement: Element = row.querySelector('.item-quantity');
    const priceElement: Element = row.querySelector('.item-price');

    const cart = new Cart(cartItems);

    const updateQuantity = (change: number) => {
      let quantity: number = parseInt(quantityElement.textContent) + change;

      quantityElement.textContent = '' + quantity;
      cart.cartItems[index].quantity = quantity;
      priceElement.textContent = `Total: $${cart.cartItems[index]
        .calcSubTotal()
        .toFixed(2)}`;

      cart.saveCartItems();

      const decreaseButton: HTMLButtonElement = document.querySelector(
        `button.quantity-update.decrease.pro-${cart.cartItems[index].id}`
      );
      decreaseButton.disabled = quantity === 1;

      updateTotalPrice(cart.calcTotalPrice());
      updateCartQuantity(cart.calcTotalProduct());
    };

    decreaseButton.addEventListener('click', () => updateQuantity(-1));
    increaseButton.addEventListener('click', () => updateQuantity(1));

    deleteButton.addEventListener('click', () => {
      cart.removeItem(+deleteButton.id.split('-')[1]);
      updateTotalPrice(cart.calcTotalPrice());
      updateCartQuantity(cart.calcTotalProduct());
      row.remove();
    });
  });
};

const updateTotalPrice = (totalPrice: number): void => {
  let totalPriceElement = document.querySelector('.total-price');
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
};

export const updateCartQuantity = (cartQuantity: number) => {
  const quantityElem: HTMLElement = document.getElementById('cart-quantity');
  quantityElem.innerHTML = cartQuantity.toString();
};

const renderTotalPrice = (price: number): HTMLElement => {
  const totalPriceWrap = document.createElement('div');
  totalPriceWrap.setAttribute('class', 'flex-row total-price-wrap');
  totalPriceWrap.innerHTML = `
  <p class="total-price-title">Total Price:</p>
  <p class="total-price">$${price.toFixed(2)}</p>`;

  return totalPriceWrap;
};

export const displayCartTable = (cartItems: CartItem[]): void => {
  const cart = new Cart(cartItems);
  updateCartQuantity(cart.calcTotalProduct());

  const cartContent = document.getElementsByClassName(
    'section-cart-content'
  )[0];

  if (cart.calcTotalProduct()) {
    const cartTable = renderTable(cartItems);

    const totalPriceElement = renderTotalPrice(cart.calcTotalPrice());
    cartContent.appendChild(cartTable);
    cartContent.appendChild(totalPriceElement);
  } else {
    const emptyImage = document.createElement('img');
    emptyImage.setAttribute('class', 'empty-image');
    emptyImage.setAttribute('src', './assets/images/empty.png');

    const emptyText = document.createElement('p');
    emptyText.setAttribute('class', 'empty-text');
    emptyText.textContent = 'Empty';

    const link = document.createElement('a');
    link.setAttribute('class', 'link');
    link.textContent = 'BACK HOME';
    link.setAttribute('href', './index.html');

    cartContent.appendChild(emptyImage);
    cartContent.appendChild(emptyText);
    cartContent.appendChild(link);
  }
};
