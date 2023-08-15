var products = [
  {
    id: 1,
    image: './assets/images/product-1.png',
    name: 'T-Shirt Summer Vibes',
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    image: './assets/images/product-2.png',
    name: 'Loose Knit 3/4 Sleeve',
    price: 119.99,
  },
  {
    id: 3,
    image: './assets/images/product-3.png',
    name: 'Basic Slim Fit T-Shirt',
    price: 79.99,
  },
  {
    id: 4,
    image: './assets/images/product-4.png',
    name: 'Loose Textured T-Shirt',
    price: 119.99,
  },
];

//Count the number of products in the cart
function updateCartQty() {
  var qtyElem = document.getElementById('cart-quantity');
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  var totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  qtyElem.innerHTML = totalQty.toString();
}

function addToCart(product) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var index = cart.findIndex((item) => item.id === product.id);

  if (index === -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[index].quantity += 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartQty();
}

//Render list products
function renderProductList(products) {
  var listItem = document.createElement('ul');
  listItem.setAttribute('class', 'product-list flex-row row');

  products.forEach((product) => {
    var item = document.createElement('li');
    item.className = 'col col-3 col-sm-6';

    var productLink = document.createElement('a');
    productLink.className = 'product-link';

    var productItem = document.createElement('div');
    productItem.className = 'product-item flex-column';

    var imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';

    var productImage = document.createElement('img');
    productImage.className = 'img product-image';
    productImage.src = product.image;
    productImage.alt = product.name;

    var productName = document.createElement('h4');
    productName.className = 'product-name';
    productName.innerHTML = product.name;

    var productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.innerHTML = product.price;

    var addButton = document.createElement('button');
    addButton.className = 'product-button';
    addButton.innerHTML = 'Add to Cart';
    addButton.addEventListener('click', function () {
      addToCart(product);
    });

    imageWrapper.appendChild(productImage);
    imageWrapper.appendChild(addButton);

    productItem.appendChild(imageWrapper);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    productLink.appendChild(productItem);
    item.appendChild(productLink);

    listItem.appendChild(item);
  });

  return listItem;
}

function displayProducts() {
  updateCartQty();
  var productList = renderProductList(products);

  var productsWrap1 = document.getElementsByClassName('products-wrap')[0];
  var productsWrap2 = document.getElementsByClassName('products-wrap')[1];

  var productListCopy = productList.cloneNode(true);

  productsWrap1.appendChild(productList);
  productsWrap2.appendChild(productListCopy);
}

displayProducts();
