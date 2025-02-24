import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsNumber()
  @Min(0, { message: 'O preço deve ser positivo' })
  price: number;

  @IsNumber()
  @Min(0, { message: 'O estoque deve ser positivo' })
  stock: number;
}