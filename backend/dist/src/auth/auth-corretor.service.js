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
exports.AuthCorretorService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuthCorretorService = class AuthCorretorService {
    constructor(JWTService, corretor) {
        this.JWTService = JWTService;
        this.corretor = corretor;
        this.issuer = 'login';
        this.audience = 'users';
    }
    createToken(corretor) {
        return {
            accessToken: this.JWTService.sign({
                id: corretor._id,
                nome: corretor.nome,
                email: corretor.email,
            }, {
                expiresIn: '7 days',
                subject: String(corretor._id),
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
        const corretor = await this.corretor.findOne({ senha: senha, email: email }).exec();
        if (!corretor)
            throw new common_1.UnauthorizedException('Usuário não encontrado.');
        return {
            token: this.createToken(corretor),
            cliente: corretor,
        };
    }
};
AuthCorretorService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('CreateCorretorDTO')),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], AuthCorretorService);
exports.AuthCorretorService = AuthCorretorService;
//# sourceMappingURL=auth-corretor.service.js.map