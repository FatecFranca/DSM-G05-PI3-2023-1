"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaModule = void 0;
const common_1 = require("@nestjs/common");
const agenda_service_1 = require("./agenda.service");
const agenda_controller_1 = require("./agenda.controller");
const auth_module_1 = require("../auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const agenda_schema_1 = require("../../schemas/agenda/agenda.schema");
let AgendaModule = class AgendaModule {
};
AgendaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'CreateAgendaDTO', schema: agenda_schema_1.AgendaSchema }]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        providers: [agenda_service_1.AgendaService],
        exports: [agenda_service_1.AgendaService],
        controllers: [agenda_controller_1.AgendaController]
    })
], AgendaModule);
exports.AgendaModule = AgendaModule;
//# sourceMappingURL=agenda.module.js.map