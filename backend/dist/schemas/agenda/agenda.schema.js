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
exports.AgendaSchema = exports.Agenda = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Agenda = class Agenda {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Agenda.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Agenda.prototype, "data", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Agenda.prototype, "horario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Types.ObjectId, ref: 'CreateClienteDTO' }),
    __metadata("design:type", Array)
], Agenda.prototype, "cliente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Types.ObjectId, ref: 'CreateCorretorDTO' }),
    __metadata("design:type", Array)
], Agenda.prototype, "corretor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Types.ObjectId, ref: 'CreateImovelDTO' }),
    __metadata("design:type", Array)
], Agenda.prototype, "imovel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Agenda.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], Agenda.prototype, "updatedAt", void 0);
Agenda = __decorate([
    (0, mongoose_1.Schema)()
], Agenda);
exports.Agenda = Agenda;
exports.AgendaSchema = mongoose_1.SchemaFactory.createForClass(Agenda);
//# sourceMappingURL=agenda.schema.js.map