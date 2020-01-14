import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from "./interfaces/product.interface";
import { CreateProductsDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async create(product: CreateProductsDto): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await this.productModel.create(newProduct);
  }
}