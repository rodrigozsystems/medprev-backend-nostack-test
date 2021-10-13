import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressRepository } from 'src/addresses/addresses.repository';
import { ClientRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRepository, AddressRepository])],
  providers: [ClientsService],
})
export class ClientsModule {}
