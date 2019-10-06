import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: String,
    
});

export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
