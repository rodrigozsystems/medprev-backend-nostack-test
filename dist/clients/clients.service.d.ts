import { AddressRepository } from 'src/addresses/addresses.repository';
import { Client } from './client.entity';
import { ClientRepository } from './clients.repository';
import { CreateClientDTO } from './dtos/create-client.dto';
export declare class ClientsService {
    private readonly clientRepository;
    private readonly addressRepository;
    constructor(clientRepository: ClientRepository, addressRepository: AddressRepository);
    createClient(createClientDto: CreateClientDTO): Promise<Client>;
}
