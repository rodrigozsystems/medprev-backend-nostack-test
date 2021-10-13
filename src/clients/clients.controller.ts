import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dtos/create-client.dto';
import { IReturnClientDTO } from './dtos/return-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Post()
  async createClient(
    @Body(ValidationPipe) createClientDto: CreateClientDTO,
  ): Promise<IReturnClientDTO> {
    const client = await this.clientsService.createClient(createClientDto);
    return {
      client,
      message: 'Cliente cadastrado com sucesso',
    };
  }
}
