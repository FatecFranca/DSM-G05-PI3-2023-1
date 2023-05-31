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
exports.ImovelSchema = exports.Imovel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const endereco_shema_1 = require("../endereco.shema");
let Imovel = class Imovel {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Imovel.prototype, "proprietario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Imovel.prototype, "area", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Imovel.prototype, "qtde_quartos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", Number)
], Imovel.prototype, "qtde_banheiros", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Imovel.prototype, "valor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Imovel.prototype, "finalidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: endereco_shema_1.enderecoSchema }),
    __metadata("design:type", Object)
], Imovel.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Imovel.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Imovel.prototype, "updatedAt", void 0);
Imovel = __decorate([
    (0, mongoose_1.Schema)()
], Imovel);
exports.Imovel = Imovel;
exports.ImovelSchema = mongoose_1.SchemaFactory.createForClass(Imovel);
//# sourceMappingURL=imovel.schema.js.map