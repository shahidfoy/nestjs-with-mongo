import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(products) {}

    @Post()
    addProduct(): any {

    }
}
