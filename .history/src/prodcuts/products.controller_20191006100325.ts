import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(productsService: ProductsController) {}

    @Post()
    addProduct(): any {

    }
}
