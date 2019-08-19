import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Product} from '../models/product';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model) {
    }

    getProducts() {
        return this.productModel.find();
    }

    async addProduct(product: Product) {
        const newProductModel = new this.productModel(product);
        const newProduct = await newProductModel.save();
        return newProduct;
    }
}
