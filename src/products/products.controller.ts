import { Controller, Post, Body, Get } from '@nestjs/common';

import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductsDto): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }
}