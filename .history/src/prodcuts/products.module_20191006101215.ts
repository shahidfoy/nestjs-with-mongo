import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";

@Module({
    controllers: [ProductsController],
    providers: [Products]
})
export class ProductsModule {

}