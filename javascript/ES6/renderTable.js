import { updateCartQty } from './cartEvent.js';

const renderTable = (cartItems) => {
  const cartTable = document.createElement('table');
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
          <button class="quantity-update decrease">-</button>
          <p class="item-quantity">${item.quantity}</p>
          <button class="quantity-update increase">+</button>
        </div>
      </td>
      <td class="col col-2">
        <button class="delete-button">Delete</button>
      </td>
    </tr>`;
  }

  cartTable.innerHTML = tableInnerHtml;

  const tableRows = cartTable.querySelectorAll('.table-row');
  tableRows.forEach((row, index) => {
    const decreaseButton = row.querySelector('.decrease');
    const increaseButton = row.querySelector('.increase');
    const deleteButton = row.querySelector('.delete-button');
    const quantityElement = row.querySelector('.item-quantity');
    const priceElement = row.querySelector('.item-price');

    decreaseButton.addEventListener('click', () => {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        priceElement.textContent = `$${(
          quantity * cartItems[index].price
        ).toFixed(2)}`;
        cartItems[index].quantity = quantity;
        updateLocalStorage(cartItems);
        updateTotalPrice(cartItems);
        updateCartQty();
      }
    });

    increaseButton.addEventListener('click', () => {
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      priceElement.textContent = `$${(
        quantity * cartItems[index].price
      ).toFixed(2)}`;
      cartItems[index].quantity = quantity;
      updateLocalStorage(cartItems);
      updateTotalPrice(cartItems);
      updateCartQty();
    });

    deleteButton.addEventListener('click', () => {
      cartItems.splice(index, 1);
      updateLocalStorage(cartItems);
      updateTotalPrice(cartItems);
      updateCartQty();
      row.remove();
    });
  });

  return cartTable;
};

const updateLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

const renderTotalPrice = (price) => {
  const totalPriceWrap = document.createElement('div');
  totalPriceWrap.setAttribute('class', 'flex-row total-price-wrap');
  totalPriceWrap.innerHTML = `
  <p class="total-price-title">Total Price:</p>
  <p class="total-price">$${price}</p>`;

  return totalPriceWrap;
};

const updateTotalPrice = (carts) => {
  let totalPriceElement = document.querySelector('.total-price');
  const totalPrice = carts.reduce((sum, i) => {
    return sum + i.price * i.quantity;
  }, 0);
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
};

export const displayCartTable = (carts) => {
  updateCartQty();
  const cartContent = document.getElementsByClassName(
    'section-cart-content'
  )[0];

  const cartTable = renderTable(carts);

  const totalPrice = carts.reduce((sum, i) => {
    return sum + i.price * i.quantity;
  }, 0);

  const totalPriceElement = renderTotalPrice(totalPrice.toFixed(2));
  cartContent.appendChild(cartTable);
  cartContent.appendChild(totalPriceElement);
};
