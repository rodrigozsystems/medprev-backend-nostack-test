import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Address } from 'src/addresses/address.entity';
import { CreateAddressDTO } from 'src/addresses/dtos/create-address.dto';

export class CreateClientDTO {
  @IsNotEmpty({ message: 'Informe o nome do cliente' })
  @ApiProperty({ example: 'Rodrigo', description: 'Nome do Cliente' })
  name: string;
  @ApiProperty({
    example: 'Razão Social',
    description: 'Razão Social do Cliente',
    required: false,
  })
  companyName?: string;
  @IsOptional()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @ApiProperty({
    example: 'cliente@email.com.br',
    description: 'E-mail do Cliente',
    required: false,
  })
  email?: string;
  clientType: number;
  @IsNotEmpty({ message: 'Informe o documento do cliente' })
  @ApiProperty({ example: '11111111111', description: 'Documento do Cliente' })
  nationalRegistration: string;
  @ApiProperty({
    example: 'F',
    description: 'Sexo do Cliente',
    required: false,
  })
  gender?: string;
  @ApiProperty({
    example: '1989-12-06',
    description: 'Data de Nascimento do Cliente',
    required: false,
  })
  birthDate?: string;
  @ApiProperty({
    example: '1181918195',
    description: 'Telefone do Cliente',
    required: false,
  })
  phone?: string;
  @ApiProperty({
    example: '11981918195',
    description: 'Celular do Cliente',
    required: false,
  })
  cellphone?: string;
  @ApiProperty({
    example: 'https://url.da.foto',
    description: 'Foto do Cliente',
    required: false,
  })
  photo?: string;
  @IsNotEmpty({ message: 'Informe o endereço do cliente' })
  @ApiProperty({ example: {}, description: 'Endereço do Cliente' })
  address: Address | CreateAddressDTO;
}
