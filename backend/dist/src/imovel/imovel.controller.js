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
exports.ImovelController = void 0;
const common_1 = require("@nestjs/common");
const imovel_service_1 = require("./imovel.service");
const create_imovel_dto_1 = require("./dtos/create-imovel.dto");
const update_imovel_dto_1 = require("./dtos/update-imovel.dto");
const return_imovol_dto_1 = require("./dtos/return-imovol.dto");
let ImovelController = class ImovelController {
    constructor(imovelService) {
        this.imovelService = imovelService;
    }
    async getAll() {
        return (await this.imovelService.getAll()).map((imovel) => new return_imovol_dto_1.ReturnImovelDTO(imovel));
    }
    async getById(id) {
        return new return_imovol_dto_1.ReturnImovelDTO(await this.imovelService.getById(id));
    }
    async create(data) {
        return await this.imovelService.create(data);
    }
    async update(id, data) {
        return new return_imovol_dto_1.ReturnImovelDTO(await this.imovelService.update(id, data));
    }
    async delete(id) {
        return await this.imovelService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_imovel_dto_1.CreateImovelDTO]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_imovel_dto_1.UpdateImovelDTO]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "delete", null);
ImovelController = __decorate([
    (0, common_1.Controller)('imovel'),
    __metadata("design:paramtypes", [imovel_service_1.ImovelService])
], ImovelController);
exports.ImovelController = ImovelController;
//# sourceMappingURL=imovel.controller.js.map