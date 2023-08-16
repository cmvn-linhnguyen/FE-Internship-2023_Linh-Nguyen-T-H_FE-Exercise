export class Product {
  constructor({ id, name, image, price, discount }) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
  }
}

export class Cart extends Product {
  constructor({ id, name, image, price, discount, quantity }) {
    super({ id, name, image, price, discount });
    this.quantity = quantity;
  }
}
