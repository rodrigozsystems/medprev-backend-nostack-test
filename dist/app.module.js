"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clients_controller_1 = require("./clients/clients.controller");
const typeorm_config_1 = require("./configs/typeorm.config");
const clients_module_1 = require("./clients/clients.module");
const addresses_module_1 = require("./addresses/addresses.module");
const clients_repository_1 = require("./clients/clients.repository");
const addresses_repository_1 = require("./addresses/addresses.repository");
const clients_service_1 = require("./clients/clients.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            typeorm_1.TypeOrmModule.forFeature([clients_repository_1.ClientRepository, addresses_repository_1.AddressRepository]),
            clients_module_1.ClientsModule,
            addresses_module_1.AddressesModule,
        ],
        controllers: [clients_controller_1.ClientsController],
        providers: [clients_service_1.ClientsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map