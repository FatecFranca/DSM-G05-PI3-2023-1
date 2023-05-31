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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClienteService = class ClienteService {
    constructor(clienteModel) {
        this.clienteModel = clienteModel;
    }
    async getAll() {
        return await this.clienteModel.find();
    }
    async getById(id) {
        return await this.clienteModel.findById(id);
    }
    async getByQuery(search) {
        return await this.clienteModel.find({ $or: [
                { cpf: search.cpf },
                { nome: search.nome },
                { email: search.email }
            ] });
    }
    async create(data) {
        try {
            const createdNew = new this.clienteModel(data);
            return await createdNew.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.NotAcceptableException('CPF já cadastrado.');
            }
            throw new common_1.NotAcceptableException(error);
        }
    }
    async update(id, data) {
        try {
            await this.exists(id);
            await this.clienteModel.updateOne({ _id: id }, data);
            return this.getById(id);
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.NotAcceptableException('CPF já cadastrado.');
            }
            throw new common_1.NotAcceptableException(error);
        }
    }
    async delete(id) {
        return await this.clienteModel.deleteOne({ _id: id });
    }
    async exists(id) {
        if (!(await this.clienteModel.count({ _id: id }))) {
            throw new common_1.NotFoundException('O cliente não existe.');
        }
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('CreateClienteDTO')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map