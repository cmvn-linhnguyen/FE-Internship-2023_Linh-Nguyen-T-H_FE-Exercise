import { Product } from './entity.js';

const data = [
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

const products = data.map((item) => {
  return new Product(item);
});

export default products;
