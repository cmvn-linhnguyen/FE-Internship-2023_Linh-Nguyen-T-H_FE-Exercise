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

var products2 = [
  {
    id: 5,
    image: './assets/images/product-1.png',
    name: 'T-Shirt Summer Vibes',
    price: 119.99,
    discount: 30,
  },
  {
    id: 6,
    image: './assets/images/product-2.png',
    name: 'Loose Knit 3/4 Sleeve',
    price: 119.99,
  },
  {
    id: 7,
    image: './assets/images/product-3.png',
    name: 'Basic Slim Fit T-Shirt',
    price: 79.99,
  },
  {
    id: 8,
    image: './assets/images/product-4.png',
    name: 'Loose Textured T-Shirt',
    price: 119.99,
  },
];

function countQuantity() {
  var cart_quantity = document.getElementById('cart-quantity');
  if (localStorage.getItem('cart')) {
    cart_quantity.innerHTML = JSON.parse(localStorage.getItem('cart')).reduce(
      (sum, i) => {
        return (sum += i.quantity);
      },
      0
    );
  } else cart_quantity.innerHTML = '0';
}

function createList(element_id, products) {
  var ul = document.getElementById(element_id);

  if (ul) {
    products.forEach((product) => {
      var li = document.createElement('li');
      li.setAttribute('class', 'col col-3 col-sm-6');

      var a = document.createElement('a');
      a.setAttribute('class', 'product-link');

      var product_wrapper = document.createElement('div');
      product_wrapper.setAttribute('class', 'product-item flex-column');

      var image_wrapper = document.createElement('div');
      image_wrapper.setAttribute('class', 'image-wrapper');

      var image = document.createElement('img');
      image.setAttribute('class', 'img product-image');
      image.setAttribute('src', product.image);
      image.setAttribute('alt', 'T-Shirt Summer Vibes');

      var h4 = document.createElement('h4');
      h4.setAttribute('class', 'product-name');
      h4.innerHTML = product.name;

      var p = document.createElement('p');
      p.setAttribute('class', 'product-price');
      p.innerHTML = product.price;

      var button = document.createElement('button');
      button.setAttribute('class', 'product-button');
      button.innerHTML = 'Add to Cart';
      button.addEventListener('click', function addToCart() {
        var listProducts = localStorage.getItem('cart');

        if (listProducts) {
          listProducts = JSON.parse(listProducts);

          var index = listProducts.findIndex((obj) => obj.id === product.id);

          if (index === -1) {
            listProducts.push({ ...product, quantity: 1 });
          } else {
            listProducts[index].quantity += 1;
          }
          localStorage.setItem('cart', JSON.stringify(listProducts));
        } else {
          localStorage.setItem(
            'cart',
            JSON.stringify([{ ...product, quantity: 1 }])
          );
        }

        countQuantity();
      });

      image_wrapper.appendChild(image);
      image_wrapper.appendChild(button);

      product_wrapper.appendChild(image_wrapper);
      product_wrapper.appendChild(h4);
      product_wrapper.appendChild(p);

      a.appendChild(product_wrapper);
      li.appendChild(a);

      ul.appendChild(li);
    });
  }
}

countQuantity();
createList('recommendation-list', products);
createList('product-today', products2);
