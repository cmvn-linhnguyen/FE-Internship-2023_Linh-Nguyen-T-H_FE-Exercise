import { Product } from './product.interface.js';
const data = [
    {
        id: 1,
        image: './assets/images/product-1.png',
        name: 'T-Shirt Summer Vibes',
        price: 119.99,
        discount: 30,
        status: 'available',
    },
    {
        id: 2,
        image: './assets/images/product-2.png',
        name: 'Loose Knit 3/4 Sleeve',
        price: 119.99,
        status: 'available',
    },
    {
        id: 3,
        image: './assets/images/product-3.png',
        name: 'Basic Slim Fit T-Shirt',
        price: 79.99,
        status: 'out_of_stock',
    },
    {
        id: 4,
        image: './assets/images/product-4.png',
        name: 'Loose Textured T-Shirt',
        price: 119.99,
        status: 'available',
    },
    {
        id: 5,
        image: './assets/images/product-1.png',
        name: 'T-Shirt Summer Vibes',
        price: 119.99,
        discount: 30,
        status: 'available',
    },
    {
        id: 6,
        image: './assets/images/product-2.png',
        name: 'Loose Knit 3/4 Sleeve',
        price: 119.99,
        status: 'out_of_stock',
    },
    {
        id: 7,
        image: './assets/images/product-3.png',
        name: 'Basic Slim Fit T-Shirt',
        price: 79.99,
        status: 'available',
    },
    {
        id: 8,
        image: './assets/images/product-4.png',
        name: 'Loose Textured T-Shirt',
        price: 119.99,
        status: 'available',
    },
];
export const products = data.map((product) => {
    return new Product(product);
});
