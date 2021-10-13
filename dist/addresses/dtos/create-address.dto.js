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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateAddressDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe o logradouro' }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe o número' }),
    __metadata("design:type", Number)
], CreateAddressDTO.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe a cidade' }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe o estado' }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe o cep' }),
    __metadata("design:type", String)
], CreateAddressDTO.prototype, "postalCode", void 0);
exports.CreateAddressDTO = CreateAddressDTO;
//# sourceMappingURL=create-address.dto.js.map