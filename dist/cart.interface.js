export class CartItem {
    constructor({ id, name, image, price, discount, quantity }) {
        this.calcSubTotal = () => {
            return this.discount
                ? (this.quantity * (100 - this.discount) * this.price) / 100
                : this.quantity * this.price;
        };
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
    }
}
export class Cart {
    constructor(cartsItems) {
        this.calcTotalProduct = () => {
            return this.cartItems.reduce((accumulator, currentCartItem) => {
                return accumulator + currentCartItem.quantity;
            }, 0);
        };
        this.calcTotalPrice = () => {
            return this.cartItems.reduce((accumulator, currentCartItem) => {
                return accumulator + currentCartItem.calcSubTotal();
            }, 0);
        };
        this.cartItems = cartsItems;
    }
}
