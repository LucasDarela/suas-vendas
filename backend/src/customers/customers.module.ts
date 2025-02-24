import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from './customer.entity';
import { AuthModule } from '../auth/auth.module'; // 🔹 Importando AuthModule

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), AuthModule], // 🔹 Adicionando AuthModule
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}