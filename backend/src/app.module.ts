import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './customers/customer.entity';
import { Product } from './products/product.entity';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Habilita o uso do .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASS || 'admin',
      database: process.env.DB_NAME || 'saas_vendas',
      entities: [Customer, Product], // Adiciona todas as entidades do banco
      autoLoadEntities: true, // Carrega automaticamente novas entidades
      synchronize: true, // ⚠️ Apenas para desenvolvimento (evita migrations)
    }),
    CustomersModule,
    ProductsModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}