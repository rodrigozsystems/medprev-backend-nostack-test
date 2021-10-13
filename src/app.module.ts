import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients/clients.controller';
import { typeOrmConfig } from './configs/typeorm.config';
import { ClientsModule } from './clients/clients.module';
import { AddressesModule } from './addresses/addresses.module';
import { ClientRepository } from './clients/clients.repository';
import { AddressRepository } from './addresses/addresses.repository';
import { ClientsService } from './clients/clients.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ClientRepository, AddressRepository]),
    ClientsModule,
    AddressesModule,
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
