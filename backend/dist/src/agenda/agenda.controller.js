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
exports.AgendaController = void 0;
const common_1 = require("@nestjs/common");
const agenda_service_1 = require("./agenda.service");
const create_agenda_dto_1 = require("./dtos/create-agenda.dto");
const update_agenda_dto_1 = require("./dtos/update-agenda.dto");
const return_agenda_dto_1 = require("./dtos/return-agenda.dto");
let AgendaController = class AgendaController {
    constructor(agendaService) {
        this.agendaService = agendaService;
    }
    async getAll() {
        return (await this.agendaService.getAll()).map((agenda) => new return_agenda_dto_1.ReturnAgendaDTO(agenda));
    }
    async getById(id) {
        return new return_agenda_dto_1.ReturnAgendaDTO(await this.agendaService.getById(id));
    }
    async create(data) {
        return await this.agendaService.create(data);
    }
    async update(id, data) {
        return new return_agenda_dto_1.ReturnAgendaDTO(await this.agendaService.update(id, data));
    }
    async delete(id) {
        return await this.agendaService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agenda_dto_1.CreateAgendaDTO]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agenda_dto_1.UpdateAgendaDTO]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "delete", null);
AgendaController = __decorate([
    (0, common_1.Controller)('agenda'),
    __metadata("design:paramtypes", [agenda_service_1.AgendaService])
], AgendaController);
exports.AgendaController = AgendaController;
//# sourceMappingURL=agenda.controller.js.map