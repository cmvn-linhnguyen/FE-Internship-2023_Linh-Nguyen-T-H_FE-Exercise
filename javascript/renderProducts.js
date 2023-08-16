import { addToCart } from './cartEvent.js';
import products from './data.js';

// //Render product price
// const renderProductPrice = (price, discount) => {
//   if (discount) {
//     const priceGroup = document.createElement('div');
//     priceGroup.setAttribute(
//       'class',
//       'product-price-group flex-row flex-space-between'
//     );

//     const discountedPrice = document.createElement('p');
//     discountedPrice.setAttribute(
//       'class',
//       'product-price product-price-discount'
//     );
//     discountedPrice.innerHTML = `$${((price * (100 - discount)) / 100).toFixed(
//       2
//     )}`;

//     const originalPrice = document.createElement('p');
//     originalPrice.setAttribute('class', 'product-price product-price-original');
//     originalPrice.innerHTML = `$${price}`;

//     priceGroup.appendChild(discountedPrice);
//     priceGroup.appendChild(originalPrice);

//     return priceGroup;
//   } else {
//     const productPrice = document.createElement('p');
//     productPrice.className = 'product-price';
//     productPrice.innerHTML = `$${price}`;

//     return productPrice;
//   }
// };

// //Render imageWrapper: Image + Button
// const renderImageWrap = (product) => {
//   const a = 0;
//   const imageWrapper = document.createElement('div');
//   imageWrapper.className = 'image-wrapper';

//   const productImage = document.createElement('img');
//   productImage.className = 'img product-image';
//   productImage.src = product.image;
//   productImage.alt = product.name;

//   const addButton = document.createElement('button');
//   addButton.className = 'product-button';
//   addButton.innerHTML = 'Add to Cart';
// addButton.addEventListener('click', function () {
//   addToCart(product);
// });

//   imageWrapper.appendChild(productImage);
//   imageWrapper.appendChild(addButton);

//   return imageWrapper;
// };

// //Render Product Detail: Name + Price
// const renderProductItem = (product) => {
//   const productItem = document.createElement('div');
//   productItem.className = 'product-item flex-column';

//   const imageWrapper = renderImageWrap(product);

//   const productName = document.createElement('h4');
//   productName.className = 'product-name';
//   productName.innerHTML = product.name;

//   const productPrice = renderProductPrice(product.price, product.discount);

//   if (product.discount) {
//     const discountTag = document.createElement('span');
//     discountTag.setAttribute('class', 'badge badge-danger product-discount');
//     discountTag.innerHTML = `-${product.discount}%`;
//     productItem.appendChild(discountTag);
//   }

//   productItem.appendChild(imageWrapper);
//   productItem.appendChild(productName);
//   productItem.appendChild(productPrice);

//   return productItem;
// };

// //Render list products
// const renderProductList = (products) => {
//   const listItem = document.createElement('ul');
//   listItem.setAttribute('class', 'product-list flex-row row');

//   products.forEach((product) => {
//     const item = document.createElement('li');
//     item.className = 'col col-3 col-sm-6';

//     const productLink = document.createElement('a');
//     productLink.className = 'product-link';

//     const productItem = renderProductItem(product);

//     productLink.appendChild(productItem);
//     item.appendChild(productLink);

//     listItem.appendChild(item);
//   });

//   return listItem;
// };

// //Display Products List
// export const displayProducts = (products) => {
//   updateCartQty();
//   const productList = renderProductList(products);
//   const productListCopy = productList.cloneNode(true);

//   const recommendationProducts =
//     document.getElementsByClassName('products-wrap')[0];
//   const ProductToday = document.getElementsByClassName('products-wrap')[1];

//   recommendationProducts.appendChild(productList);
//   ProductToday.appendChild(productListCopy);
// };

const loadUI = (listItem, product) => {
  listItem.innerHTML += `<li class="col col-3 col-sm-6">
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
        <button class="product-button" id="button-${product.id}">Add to Cart</button>
      </div>
      <h4 class="product-name">${product.name}</h4>
      ${
        product.discount
          ? `<div class="product-price-group flex-row flex-space-between">
              <p class="product-price product-price-discount">$${(
                (product.price * (100 - product.discount)) /
                100
              ).toFixed(2)}</p>
              <p class="product-price product-price-original">$${product.price}
              </p>
            </div>`
          : `<p class="product-price">$${product.price}</p>`
      }
      </div>
    </a>
  </li>`;
};

const renderProductList = (products) => {
  let listItem = document.createElement('ul');
  listItem.setAttribute('class', 'product-list flex-row row');

  products.map(async (product) => {
    await loadUI(listItem, product);
    const button = document.getElementById(`button-${product.id}`);
    console.log(button);
  })

  return listItem;
};

//Display Products List
export const displayProducts = (products) => {
  //updateCartQty();
  const productList = renderProductList(products);
  const productListCopy = productList.cloneNode(true);

  const recommendationProducts =
    document.getElementsByClassName('products-wrap')[0];
  const ProductToday = document.getElementsByClassName('products-wrap')[1];

  recommendationProducts.appendChild(productList);
  ProductToday.appendChild(productListCopy);
};
