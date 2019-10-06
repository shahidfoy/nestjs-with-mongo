import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {

    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {

  }

  private findProduct(id: string) {
    const product = this.products.find(prod => prod.id === productId);
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
  }
}
