"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepository = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const address_entity_1 = require("./address.entity");
const create_address_dto_1 = require("./dtos/create-address.dto");
let AddressRepository = class AddressRepository extends typeorm_1.Repository {
    async createAddress(createAddressDTO) {
        const addressObject = new create_address_dto_1.CreateAddressDTO();
        Object.assign(addressObject, createAddressDTO);
        const errors = await (0, class_validator_1.validate)(addressObject);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors.map((a) => Object.values(a.constraints)[0]));
        }
        const { street, number, city, state, postalCode, complement, neighborhood, } = createAddressDTO;
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
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao salvar o endereço no banco de dados');
        }
    }
};
AddressRepository = __decorate([
    (0, typeorm_1.EntityRepository)(address_entity_1.Address)
], AddressRepository);
exports.AddressRepository = AddressRepository;
//# sourceMappingURL=addresses.repository.js.map