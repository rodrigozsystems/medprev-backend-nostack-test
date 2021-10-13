import { BaseEntity } from 'typeorm';
export declare class Client extends BaseEntity {
    id: string;
    name: string;
    companyName: string;
    email: string;
    password: string;
    salt: string;
    confirmationToken: string;
    recoverToken: string;
    createdAt: Date;
    updatedAt: Date;
}
