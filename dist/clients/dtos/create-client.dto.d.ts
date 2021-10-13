import { Address } from 'src/addresses/address.entity';
import { CreateAddressDTO } from 'src/addresses/dtos/create-address.dto';
export declare class CreateClientDTO {
    name: string;
    companyName?: string;
    email?: string;
    clientType: number;
    nationalRegistration: string;
    gender?: string;
    birthDate?: string;
    phone?: string;
    cellphone?: string;
    photo?: string;
    address: Address | CreateAddressDTO;
}
