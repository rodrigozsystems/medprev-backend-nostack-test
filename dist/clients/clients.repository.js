"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
let ClientRepository = class ClientRepository extends typeorm_1.Repository {
    async createClient(createClientDTO) {
        const { name, companyName, email, nationalRegistration, gender, birthDate, phone, cellphone, photo, address, } = createClientDTO;
        const doc = nationalRegistration.replace(/\D/g, '');
        const isCnpj = doc.length > 11;
        const client = this.create();
        const errors = [];
        if (isCnpj) {
            if (!companyName) {
                errors.push('Informe a razão social.');
            }
        }
        else {
            if (!gender) {
                errors.push('Informe o sexo.');
            }
            if (!birthDate) {
                errors.push('Informe a data de nascimento.');
            }
        }
        if (errors.length) {
            throw new common_1.BadRequestException(errors);
        }
        client.name = name;
        client.companyName = companyName;
        client.email = email;
        client.clientType = isCnpj ? 2 : 1;
        client.nationalRegistration = doc;
        client.gender = gender;
        client.birthDate = birthDate ? (0, date_fns_1.parseISO)(birthDate) : null;
        client.phone = phone;
        client.cellphone = cellphone;
        client.photo = photo;
        client.address = address.id;
        try {
            await client.save();
            return client;
        }
        catch (error) {
            console.log(error);
            if (error.code.toString() === '23505') {
                throw new common_1.ConflictException('Endereço de email já está em uso');
            }
            else {
                throw new common_1.InternalServerErrorException('Erro ao salvar o cliente no banco de dados');
            }
        }
    }
};
ClientRepository = __decorate([
    (0, typeorm_1.EntityRepository)(client_entity_1.Client)
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=clients.repository.js.map