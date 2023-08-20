export class Product {
    constructor({ id, name, image, price, discount, status }) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.status = status;
        this.discountedPrice = (this.price * (100 - this.discount)) / 100;
    }
}
