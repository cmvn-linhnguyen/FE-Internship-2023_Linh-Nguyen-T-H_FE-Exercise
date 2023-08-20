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
        this.discountedPrice = (this.price * (100 - this.discount)) / 100;
    }
}
export class Cart {
    constructor(cartsItems) {
        this.saveCartItems = () => {
            localStorage.setItem("cart", JSON.stringify(this.cartItems));
        };
        this.addItem = (product) => {
            const cartItem = this.cartItems.find((cart) => cart.id === product.id);
            if (cartItem) {
                cartItem.quantity += 1;
            }
            else {
                const cartItem = new CartItem({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    discount: product.discount,
                    quantity: 1,
                });
                this.cartItems.push(cartItem);
            }
            this.saveCartItems();
        };
        this.removeItem = (id) => {
            const indexToRemove = this.cartItems.findIndex((item) => item.id === id);
            if (indexToRemove !== -1) {
                this.cartItems.splice(indexToRemove, 1);
                this.saveCartItems();
            }
        };
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
