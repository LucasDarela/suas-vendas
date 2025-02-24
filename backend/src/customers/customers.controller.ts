import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';


import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
@UseGuards(JwtAuthGuard) // Protege todas as rotas

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Customer | null> {
    return this.customersService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() customerData: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(customerData);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() customerData: UpdateCustomerDto): Promise<Customer> {
    return this.customersService.update(id, customerData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.customersService.remove(id);
  }
}