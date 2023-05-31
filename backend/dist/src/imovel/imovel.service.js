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
exports.ImovelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ImovelService = class ImovelService {
    constructor(imovelModel) {
        this.imovelModel = imovelModel;
    }
    async getAll() {
        return await this.imovelModel.find();
    }
    async getById(id) {
        return await this.imovelModel.findById(id);
    }
    async create(data) {
        try {
            const newImovel = new this.imovelModel(data);
            return newImovel.save();
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error);
        }
    }
    async update(id, data) {
        try {
            await this.exists(id);
            await this.imovelModel.updateOne({ _id: id }, data);
            return this.getById(id);
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error);
        }
    }
    async delete(id) {
        await this.exists(id);
        return await this.imovelModel.deleteOne({ _id: id });
    }
    async exists(id) {
        if (!(await this.imovelModel.count({ _id: id }))) {
            throw new common_1.NotFoundException('Imovel não cadastrado.');
        }
    }
};
ImovelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('CreateImovelDTO')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ImovelService);
exports.ImovelService = ImovelService;
//# sourceMappingURL=imovel.service.js.map