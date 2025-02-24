import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const newProduct = this.productsRepository.create(productData);
    return this.productsRepository.save(newProduct);
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productsRepository.update(id, productData);
    const updatedProduct = await this.findOne(id);
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}