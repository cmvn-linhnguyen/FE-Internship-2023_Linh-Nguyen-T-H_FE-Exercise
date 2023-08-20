import { Product } from './product.entity.js';
import { displayProducts } from './product.ui.js';

const main = async () => {
  try {
    const response = await fetch('../data.json');
    const data = await response.json();
    const products = data.map((item: Product) => {
      return new Product(item);
    });
    displayProducts(products);
  } catch (error) {
    console.error('Error: ', error);
  }
};

main();
