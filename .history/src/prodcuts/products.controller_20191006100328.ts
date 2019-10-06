import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(productsService: ProductsSr) {}

    @Post()
    addProduct(): any {

    }
}
