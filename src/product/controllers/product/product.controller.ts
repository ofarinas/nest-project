import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService,
    ) {
    }

    @Get()
    getProduct() {
        return this.productService.getProducts();
    }

    @Post()
    async addProduct(@Body()product: Product) {
       return  await this.productService.addProduct(product);
    }
}
