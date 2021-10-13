import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dtos/create-client.dto';
import { IReturnClientDTO } from './dtos/return-client.dto';
export declare class ClientsController {
    private clientsService;
    constructor(clientsService: ClientsService);
    createClient(createClientDto: CreateClientDTO): Promise<IReturnClientDTO>;
}
