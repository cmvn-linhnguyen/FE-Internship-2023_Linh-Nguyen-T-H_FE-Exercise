import { Product } from './entity.js';

const data = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    image: './assets/images/product-1.png',
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    image: './assets/images/product-2.png',
    price: 119.99,
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    image: './assets/images/product-3.png',
    price: 79.99,
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    image: './assets/images/product-4.png',
    price: 119.99,
  },
];

const products = data.map((item) => {
  return new Product(item);
});

export default products;
