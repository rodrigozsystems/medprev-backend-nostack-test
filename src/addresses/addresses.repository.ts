import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDTO } from './dtos/create-address.dto';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async createAddress(createAddressDTO: CreateAddressDTO): Promise<Address> {
    const addressObject = new CreateAddressDTO();
    Object.assign(addressObject, createAddressDTO);

    const errors = await validate(addressObject);

    if (errors.length > 0) {
      throw new BadRequestException(
        errors.map((a: any) => Object.values(a.constraints)[0]),
      );
    }

    const {
      street,
      number,
      city,
      state,
      postalCode,
      complement,
      neighborhood,
    } = createAddressDTO;

    const address = this.create();

    address.street = street;
    address.number = number;
    address.city = city;
    address.state = state;
    address.postalCode = postalCode;
    address.complement = complement;
    address.neighborhood = neighborhood;

    try {
      await address.save();
      return address;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar o endereço no banco de dados',
      );
    }
  }
}
