import {Module} from '@nestjs/common';
import {ProductService} from './services/product.service';
import {ProductController} from './controllers/product/product.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {productSchema} from './repository/product.repository';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Product', schema: productSchema}])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {
}
