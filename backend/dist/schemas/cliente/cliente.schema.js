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
exports.ClienteSchema = exports.Cliente = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const endereco_shema_1 = require("../endereco.shema");
let Cliente = class Cliente {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "cpf", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cliente.prototype, "telefone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cliente.prototype, "senha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: endereco_shema_1.enderecoSchema }),
    __metadata("design:type", Object)
], Cliente.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 2 }),
    __metadata("design:type", Number)
], Cliente.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Cliente.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Cliente.prototype, "updatedAt", void 0);
Cliente = __decorate([
    (0, mongoose_1.Schema)()
], Cliente);
exports.Cliente = Cliente;
exports.ClienteSchema = mongoose_1.SchemaFactory.createForClass(Cliente);
//# sourceMappingURL=cliente.schema.js.map