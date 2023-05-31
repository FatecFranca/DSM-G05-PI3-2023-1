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
exports.CorretorSchema = exports.Corretor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const endereco_shema_1 = require("../endereco.shema");
let Corretor = class Corretor {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Corretor.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Corretor.prototype, "cpf", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Corretor.prototype, "telefone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Corretor.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Corretor.prototype, "senha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: endereco_shema_1.enderecoSchema }),
    __metadata("design:type", Object)
], Corretor.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], Corretor.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Corretor.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Corretor.prototype, "updatedAt", void 0);
Corretor = __decorate([
    (0, mongoose_1.Schema)()
], Corretor);
exports.Corretor = Corretor;
exports.CorretorSchema = mongoose_1.SchemaFactory.createForClass(Corretor);
//# sourceMappingURL=corretor.schema.js.map