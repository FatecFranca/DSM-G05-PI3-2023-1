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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_cliente_service_1 = require("./auth-cliente.service");
const auth_corretor_service_1 = require("./auth-corretor.service");
const login_dto_1 = require("./dtos/login.dto");
let AuthController = class AuthController {
    constructor(authClienteService, authCorretorService) {
        this.authClienteService = authClienteService;
        this.authCorretorService = authCorretorService;
    }
    async cliente({ email, senha }) {
        return await this.authClienteService.login(email, senha);
    }
    async corretor({ email, senha }) {
        return await this.authCorretorService.login(email, senha);
    }
};
__decorate([
    (0, common_1.Post)('login/cliente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.AuthLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "cliente", null);
__decorate([
    (0, common_1.Post)('login/corretor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.AuthLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "corretor", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_cliente_service_1.AuthClienteService,
        auth_corretor_service_1.AuthCorretorService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map