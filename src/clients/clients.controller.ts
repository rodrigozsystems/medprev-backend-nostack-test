import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dtos/create-client.dto';
import { IReturnClientDTO } from './dtos/return-client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create client' })
  @ApiResponse({ status: 200, description: 'Cliente cadastrado com sucesso' })
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
