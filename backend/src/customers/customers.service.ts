import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  findOne(id: number): Promise<Customer | null> {
    return this.customersRepository.findOne({ where: { id } });
  }

  async create(customerData: Partial<Customer>): Promise<Customer> {
    const newCustomer = this.customersRepository.create(customerData);
    return this.customersRepository.save(newCustomer);
  }

  async update(id: number, customerData: Partial<Customer>): Promise<Customer> {
    await this.customersRepository.update(id, customerData);
    const customer = await this.findOne(id);
    if (!customer) {
      throw new Error(`Customer with id ${id} not found`);
    }
    return customer;
  }

  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}