"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const cliente_module_1 = require("../cliente/cliente.module");
const mongoose_1 = require("@nestjs/mongoose");
const cliente_schema_1 = require("../../schemas/cliente/cliente.schema");
const auth_controller_1 = require("./auth.controller");
const auth_cliente_service_1 = require("./auth-cliente.service");
const corretor_schema_1 = require("../../schemas/corretor/corretor.schema");
const auth_corretor_service_1 = require("./auth-corretor.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRETE
            }),
            (0, common_1.forwardRef)(() => cliente_module_1.ClienteModule),
            mongoose_1.MongooseModule.forFeature([{ name: 'CreateClienteDTO', schema: cliente_schema_1.ClienteSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'CreateCorretorDTO', schema: corretor_schema_1.CorretorSchema }]),
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_cliente_service_1.AuthClienteService, auth_corretor_service_1.AuthCorretorService],
        providers: [auth_cliente_service_1.AuthClienteService, auth_corretor_service_1.AuthCorretorService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map