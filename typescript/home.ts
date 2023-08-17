import { ProductProps } from './product.interface.js';
import { displayProducts } from './product.ui.js';

const main = async () => {
  const products: ProductProps[] = await fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
      return json;
    });

  displayProducts(products);
};

main();
