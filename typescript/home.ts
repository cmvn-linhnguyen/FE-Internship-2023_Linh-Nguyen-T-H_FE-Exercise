import { ProductProps } from './product.interface.js';
import { displayProducts } from './product.ui.js';

const main = async () => {
  try {
    const response = await fetch('./data.json');
    const products: ProductProps[] = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error: ', error);
  }
};

main();
