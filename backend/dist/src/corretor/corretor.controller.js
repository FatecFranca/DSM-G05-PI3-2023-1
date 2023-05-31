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
exports.CorretorController = void 0;
const common_1 = require("@nestjs/common");
const corretor_service_1 = require("./corretor.service");
const create_corretor_dto_1 = require("./dtos/create-corretor.dto");
const update_corretor_dto_1 = require("./dtos/update-corretor.dto");
const return_corretor_dto_1 = require("./dtos/return-corretor.dto");
let CorretorController = class CorretorController {
    constructor(corretorService) {
        this.corretorService = corretorService;
    }
    async getAll() {
        return (await this.corretorService.getAll()).map((corretor) => new return_corretor_dto_1.ReturnCorretorDTO(corretor));
    }
    async getById(id) {
        return new return_corretor_dto_1.ReturnCorretorDTO(await this.corretorService.getById(id));
    }
    async create(data) {
        return await this.corretorService.create(data);
    }
    async update(id, data) {
        return new return_corretor_dto_1.ReturnCorretorDTO(await this.corretorService.update(id, data));
    }
    async delete(id) {
        return await this.corretorService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CorretorController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CorretorController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_corretor_dto_1.CreateCorretorDTO]),
    __metadata("design:returntype", Promise)
], CorretorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_corretor_dto_1.UpdateCorretorDTO]),
    __metadata("design:returntype", Promise)
], CorretorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CorretorController.prototype, "delete", null);
CorretorController = __decorate([
    (0, common_1.Controller)('corretor'),
    __metadata("design:paramtypes", [corretor_service_1.CorretorService])
], CorretorController);
exports.CorretorController = CorretorController;
//# sourceMappingURL=corretor.controller.js.map