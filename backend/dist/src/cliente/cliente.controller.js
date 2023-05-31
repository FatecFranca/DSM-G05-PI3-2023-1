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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("./cliente.service");
const create_cliente_dto_1 = require("./dtos/create-cliente.dto");
const update_cliente_dto_1 = require("./dtos/update-cliente.dto");
const return_cliente_dto_1 = require("./dtos/return-cliente.dto");
const search_query_dto_1 = require("./dtos/search-query.dto");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async getQuery(query) {
        return (await this.clienteService.getByQuery(query)).map((cliente) => new return_cliente_dto_1.ReturnClienteDTO(cliente));
    }
    async getAll() {
        return (await this.clienteService.getAll()).map((cliente) => new return_cliente_dto_1.ReturnClienteDTO(cliente));
    }
    async getById(id) {
        return new return_cliente_dto_1.ReturnClienteDTO(await this.clienteService.getById(id));
    }
    async create(data) {
        return await this.clienteService.create(data);
    }
    async update(id, data) {
        return new return_cliente_dto_1.ReturnClienteDTO(await this.clienteService.update(id, data));
    }
    async delete(id) {
        return await this.clienteService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_query_dto_1.QueryParamsDTO]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getQuery", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDTO]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cliente_dto_1.UpdateClienteDTO]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "delete", null);
ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map