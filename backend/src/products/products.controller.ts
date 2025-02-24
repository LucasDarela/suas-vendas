import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
@UseGuards(JwtAuthGuard) // Protege todas as rotas

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Product | null> {
    return this.productsService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() productData: CreateProductDto): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() productData: UpdateProductDto): Promise<Product> {
    return this.productsService.update(id, productData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}