var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product } from './product.entity.js';
import { displayProducts } from './product.ui.js';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('../data.json');
        const data = yield response.json();
        const products = data.map((item) => {
            return new Product(item);
        });
        displayProducts(products);
    }
    catch (error) {
        console.error('Error: ', error);
    }
});
main();
