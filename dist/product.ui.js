import { addToCart, updateCartQuantity } from './cart.event.js';
const renderProductList = (products) => {
    let listItem = document.createElement('ul');
    listItem.setAttribute('class', 'product-list flex-row row');
    products.forEach((product) => {
        listItem.innerHTML += `
      <li class="col col-3 col-sm-6">
        <a class="product-link">
          <div class="product-item ${product.status} flex-column">
            ${product.discount
            ? `<span class="badge badge-danger product-discount">-${product.discount}%</span>`
            : ``}
            <div class="image-wrapper">
              <img
                class="img product-image"
                src=${product.image}
                alt=${product.name}
              />
              <button class="product-button" id="btn-${product.id}">Add to Cart</button>
              <span class="sold-out">SOLD OUT</span>
            </div>
            <h4 class="product-name">${product.name}</h4>
            ${product.discount
            ? `<div class="product-price-group flex-row flex-space-between">
                    <p class="product-price product-price-discount">$${((product.price * (100 - product.discount)) /
                100).toFixed(2)}</p>
                    <p class="product-price product-price-original">$${product.price}</p>
                  </div>`
            : `<p class="product-price">$${product.price}</p>`}
          </div>
        </a>
      </li>`;
    });
    const buttons = listItem.querySelectorAll('.product-button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(products[index]);
        });
    });
    return listItem;
};
export const displayProducts = (products) => {
    updateCartQuantity();
    const productRecommendation = renderProductList(products);
    const productToday = renderProductList(products);
    document
        .getElementsByClassName('products-wrap')[0]
        .appendChild(productRecommendation);
    document.getElementsByClassName('products-wrap')[1].appendChild(productToday);
};
