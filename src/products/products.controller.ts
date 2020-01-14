import { Controller, Post, Body, Get, Param } from '@nestjs/common';

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

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Product> {
    return await this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductsDto): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }
}