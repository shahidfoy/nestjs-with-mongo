import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './prodcuts/products.module';

@Module({
  imports: [
    ProductsModule, MongooseModule.forRoot('mongodb+srv://m001-student:<password>@shahidfoy-lq9mm.mongodb.net/admin?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
