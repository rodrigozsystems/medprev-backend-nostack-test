import { IsNotEmpty } from 'class-validator';

export class CreateAddressDTO {
  id?: string;
  @IsNotEmpty({ message: 'Informe o logradouro' })
  street: string;
  @IsNotEmpty({ message: 'Informe o número' })
  number: number;
  @IsNotEmpty({ message: 'Informe a cidade' })
  city: string;
  @IsNotEmpty({ message: 'Informe o estado' })
  state: string;
  @IsNotEmpty({ message: 'Informe o cep' })
  postalCode: string;
  complement?: string;
  neighborhood?: string;
}
