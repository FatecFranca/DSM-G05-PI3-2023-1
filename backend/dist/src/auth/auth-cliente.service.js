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
exports.AuthClienteService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuthClienteService = class AuthClienteService {
    constructor(JWTService, Cliente) {
        this.JWTService = JWTService;
        this.Cliente = Cliente;
        this.issuer = 'login';
        this.audience = 'users';
    }
    createToken(cliente) {
        return {
            accessToken: this.JWTService.sign({
                id: cliente._id,
                nome: cliente.nome,
                email: cliente.email,
            }, {
                expiresIn: '7 days',
                subject: String(cliente._id),
                issuer: this.issuer,
                audience: this.audience,
            })
        };
    }
    checkToken(token) {
        try {
            const data = this.JWTService.verify(token, {
                issuer: this.issuer,
                audience: this.audience,
            });
            return data;
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    isValidToken(token) {
        try {
            this.checkToken(token);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async login(email, senha) {
        const cliente = await this.Cliente.findOne({ senha: senha, email: email }).exec();
        if (!cliente)
            throw new common_1.UnauthorizedException('Usuário não encontrado.');
        return {
            token: this.createToken(cliente),
            cliente,
        };
    }
};
AuthClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('CreateClienteDTO')),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], AuthClienteService);
exports.AuthClienteService = AuthClienteService;
//# sourceMappingURL=auth-cliente.service.js.map