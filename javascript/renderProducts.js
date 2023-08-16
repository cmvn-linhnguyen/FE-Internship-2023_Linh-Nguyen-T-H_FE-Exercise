import { addToCart, updateCartQty } from './cartEvent.js';

const renderProductList = (products) => {
  let listItem = document.createElement('ul');
  listItem.setAttribute('class', 'product-list flex-row row');

  products.forEach((product) => {
    listItem.innerHTML += `
      <li class="col col-3 col-sm-6">
        <a class="product-link">
          <div class="product-item flex-column">
            ${
              product.discount
                ? `<span class="badge badge-danger product-discount">-${product.discount}%</span>`
                : ``
            }
            <div class="image-wrapper">
              <img
                class="img product-image"
                src=${product.image}
                alt=${product.name}
              />
              <button class="product-button" id="btn-${
                product.id
              }">Add to Cart</button>
            </div>
            <h4 class="product-name">${product.name}</h4>
            ${
              product.discount
                ? `<div class="product-price-group flex-row flex-space-between">
                    <p class="product-price product-price-discount">$${(
                      (product.price * (100 - product.discount)) /
                      100
                    ).toFixed(2)}</p>
                    <p class="product-price product-price-original">$${
                      product.price
                    }</p>
                  </div>`
                : `<p class="product-price">$${product.price}</p>`
            }
          </div>
        </a>
      </li>`;
  });

  return listItem;
};

function addEventClick(products) {
  const buttons = document.getElementsByClassName('product-button');
  for (let button of buttons) {
    button.addEventListener('click', () => {
      const product = products.find(
        (item) => item.id === parseInt(button.id.split('-')[1])
      );
      addToCart(product);
    });
  }
}

// Display Products List
export const displayProducts = (products) => {
  updateCartQty();
  const productRecommendation = renderProductList(products);
  const productToday = renderProductList(products);

  document
    .getElementsByClassName('products-wrap')[0]
    .appendChild(productRecommendation);
  document.getElementsByClassName('products-wrap')[1].appendChild(productToday);

  addEventClick(products);
};
