import { Module } from '@nestjs/common';
import { MongooseModule }
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './prodcuts/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
