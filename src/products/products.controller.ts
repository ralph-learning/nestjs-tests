import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';

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

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Product> {
    return await this.productsService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateProductDto: CreateProductsDto): Promise<Product> {
    return await this.productsService.update(id, updateProductDto);
  }
}