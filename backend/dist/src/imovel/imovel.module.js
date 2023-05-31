"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImovelModule = void 0;
const common_1 = require("@nestjs/common");
const imovel_service_1 = require("./imovel.service");
const imovel_controller_1 = require("./imovel.controller");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("../auth/auth.module");
const imovel_schema_1 = require("../../schemas/imovel/imovel.schema");
let ImovelModule = class ImovelModule {
};
ImovelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'CreateImovelDTO', schema: imovel_schema_1.ImovelSchema }]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        providers: [imovel_service_1.ImovelService],
        exports: [imovel_service_1.ImovelService],
        controllers: [imovel_controller_1.ImovelController]
    })
], ImovelModule);
exports.ImovelModule = ImovelModule;
//# sourceMappingURL=imovel.module.js.map