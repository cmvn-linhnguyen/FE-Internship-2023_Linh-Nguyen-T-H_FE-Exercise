import { Cart } from '../cart/cart.entity.js';
import { updateCartQuantity } from '../cart/cart.ui.js';
import { getCartItems } from '../utils/index.js';
export const renderProducts = (products) => {
    let listItem = document.createElement('ul');
    listItem.setAttribute('class', 'row product-list');
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
                      <p class="product-price product-price-discount">$${product.discountedPrice.toFixed(2)}</p>
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
            const cart = new Cart(getCartItems());
            cart.addItem(products[index]);
            updateCartQuantity(cart.calcTotalProduct());
        });
    });
    return listItem;
};
export const displayProducts = (products) => {
    const data = getCartItems();
    const cart = new Cart(data);
    updateCartQuantity(cart.calcTotalProduct());
    const productRecommendation = renderProducts(products);
    const productToday = renderProducts(products);
    document
        .getElementsByClassName('products-wrap')[0]
        .appendChild(productRecommendation);
    document.getElementsByClassName('products-wrap')[1].appendChild(productToday);
};
