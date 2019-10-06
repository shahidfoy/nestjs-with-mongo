import * as mongoose from 'mongoose';

export const Product

export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
