import { Address } from 'src/addresses/address.entity';
import { BaseEntity } from 'typeorm';
export declare class Client extends BaseEntity {
    id: string;
    name: string;
    companyName: string;
    email: string;
    clientType: number;
    nationalRegistration: string;
    gender: string;
    birthDate: Date;
    phone: string;
    cellphone: string;
    photo: string;
    address: Address;
    createdAt: Date;
    updatedAt: Date;
}
