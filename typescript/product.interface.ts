export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status: 'out_of_stock' | 'available';
}

export class Product implements ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: 'out_of_stock' | 'available';

  constructor({ id, name, image, price, discount, status }: ProductProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.status = status;
  }
}
