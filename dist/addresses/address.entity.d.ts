import { Client } from 'src/clients/client.entity';
import { BaseEntity } from 'typeorm';
export declare class Address extends BaseEntity {
    id: string;
    street: string;
    number: number;
    city: string;
    state: string;
    postalCode: string;
    complement: string;
    neighborhood: string;
    client: Client;
    createdAt: Date;
    updatedAt: Date;
}
