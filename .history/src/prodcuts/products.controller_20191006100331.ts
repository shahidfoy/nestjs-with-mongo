import { Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(productsService: ProductsService) {}

    @Post()
    addProduct(): any {

    }
}
