import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'O e-mail deve ser válido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @IsString()
  @Length(9, 15, { message: 'O telefone deve ter entre 9 e 15 caracteres' })
  phone: string;
}