import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDTO } from './dtos/create-address.dto';
export declare class AddressRepository extends Repository<Address> {
    createAddress(createAddressDTO: CreateAddressDTO): Promise<Address>;
}
