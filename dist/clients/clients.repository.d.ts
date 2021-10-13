import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDTO } from './dtos/create-client.dto';
export declare class ClientRepository extends Repository<Client> {
    createClient(createClientDTO: CreateClientDTO): Promise<Client>;
}
