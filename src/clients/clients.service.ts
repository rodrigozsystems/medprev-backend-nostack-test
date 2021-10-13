import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from 'src/addresses/addresses.repository';
import { Client } from './client.entity';
import { ClientRepository } from './clients.repository';
import { CreateClientDTO } from './dtos/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientRepository)
    private readonly clientRepository: ClientRepository,
    @InjectRepository(AddressRepository)
    private readonly addressRepository: AddressRepository,
  ) {}

  async createClient(createClientDto: CreateClientDTO): Promise<Client> {
    const { address } = createClientDto;

    if (!address) {
      throw new InternalServerErrorException('Endereço é obrigatório.');
    }

    const newAddress = await this.addressRepository.createAddress(address);

    createClientDto.address = newAddress;

    return this.clientRepository.createClient(createClientDto);
  }
}
