import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { parseISO } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDTO } from './dtos/create-client.dto';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(createClientDTO: CreateClientDTO): Promise<Client> {
    const {
      name,
      companyName,
      email,
      nationalRegistration,
      gender,
      birthDate,
      phone,
      cellphone,
      photo,
      address,
    } = createClientDTO;

    const doc = nationalRegistration.replace(/\D/g, '');
    const isCnpj = doc.length > 11;

    const client = this.create();

    const errors = [];

    if (isCnpj) {
      if (!companyName) {
        errors.push('Informe a razão social.');
      }
    } else {
      if (!gender) {
        errors.push('Informe o sexo.');
      }
      if (!birthDate) {
        errors.push('Informe a data de nascimento.');
      }
    }

    if (errors.length) {
      throw new BadRequestException(errors);
    }

    client.name = name;
    client.companyName = companyName;
    client.email = email;
    client.clientType = isCnpj ? 2 : 1;
    client.nationalRegistration = doc;
    client.gender = gender;
    client.birthDate = birthDate ? parseISO(birthDate) : null;
    client.phone = phone;
    client.cellphone = cellphone;
    client.photo = photo;

    client.address = <any>address.id;

    try {
      await client.save();
      return client;
    } catch (error) {
      console.log(error);
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o cliente no banco de dados',
        );
      }
    }
  }
}
