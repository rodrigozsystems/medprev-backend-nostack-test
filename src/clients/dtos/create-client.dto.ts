import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Address } from 'src/addresses/address.entity';
import { CreateAddressDTO } from 'src/addresses/dtos/create-address.dto';

export class CreateClientDTO {
  @IsNotEmpty({ message: 'Informe o nome do cliente' })
  name: string;
  companyName?: string;
  @IsOptional()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  email?: string;
  clientType: number;
  @IsNotEmpty({ message: 'Informe o documento do cliente' })
  nationalRegistration: string;
  gender?: string;
  birthDate?: string;
  phone?: string;
  cellphone?: string;
  photo?: string;
  @IsNotEmpty({ message: 'Informe o endereço do cliente' })
  address: Address | CreateAddressDTO;
}
