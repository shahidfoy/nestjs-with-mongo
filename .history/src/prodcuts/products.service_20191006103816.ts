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
    const product = this.findProduct(productId);
    return { ...product };
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    const product = this.findProduct(productId);
  }

  private findProduct(id: string) {
    const productIndex = this.products.findIndex(prod => prod.id === id);
    const product = this.products[produ]
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
