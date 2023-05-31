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
exports.AgendaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AgendaService = class AgendaService {
    constructor(agendaModel) {
        this.agendaModel = agendaModel;
    }
    async getAll() {
        return await this.agendaModel.find()
            .populate('cliente')
            .populate('imovel')
            .populate('corretor');
    }
    async getById(id) {
        return await this.agendaModel.findById(id)
            .populate('cliente')
            .populate('imovel')
            .populate('corretor');
    }
    async create(data) {
        try {
            return await new this.agendaModel(data).save();
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error);
        }
    }
    async update(id, data) {
        try {
            await this.exists(id);
            await this.agendaModel.updateOne({ _id: id }, data);
            return this.getById(id);
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error);
        }
    }
    async delete(id) {
        await this.exists(id);
        return await this.agendaModel.deleteOne({ _id: id });
    }
    async exists(id) {
        if (!(await this.agendaModel.count({ _id: id }))) {
            throw new common_1.NotFoundException('Agenda não cadastrada.');
        }
    }
};
AgendaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('CreateAgendaDTO')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AgendaService);
exports.AgendaService = AgendaService;
//# sourceMappingURL=agenda.service.js.map