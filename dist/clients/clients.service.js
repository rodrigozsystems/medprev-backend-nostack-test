"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const addresses_repository_1 = require("../addresses/addresses.repository");
const clients_repository_1 = require("./clients.repository");
let ClientsService = class ClientsService {
    constructor(clientRepository, addressRepository) {
        this.clientRepository = clientRepository;
        this.addressRepository = addressRepository;
    }
    async createClient(createClientDto) {
        const { address } = createClientDto;
        if (!address) {
            throw new common_1.InternalServerErrorException('Endereço é obrigatório.');
        }
        const newAddress = await this.addressRepository.createAddress(address);
        createClientDto.address = newAddress;
        return this.clientRepository.createClient(createClientDto);
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clients_repository_1.ClientRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(addresses_repository_1.AddressRepository)),
    __metadata("design:paramtypes", [clients_repository_1.ClientRepository,
        addresses_repository_1.AddressRepository])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map