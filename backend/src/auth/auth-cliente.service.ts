import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClienteDTO } from '../cliente/dtos/create-cliente.dto';
import { Cliente } from '../../schemas/cliente/cliente';

@Injectable()
export class AuthClienteService {
    private issuer = 'login';
    private audience = 'users';
    constructor(
        private readonly JWRService: JwtService,
        @InjectModel('CreateClienteDTO') private readonly Cliente: Model<CreateClienteDTO>
    ) { }

    createToken(cliente: Cliente) {
        return {
            accessToken: this.JWRService.sign(
                {
                    id: cliente._id,
                    nome: cliente.nome,
                    email: cliente.email,
                },
                {
                    expiresIn: '7 days',
                    subject: String(cliente._id),
                    issuer: this.issuer,
                    audience: this.audience,
                }
            )
        }
    }

    checkToken(token: string) {
        try {
            const data = this.JWRService.verify(token, {
                issuer: this.issuer,
                audience: this.audience,
            });
            return data;
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    isValidToken(token: string) {
        try {
            this.checkToken(token);
            return true;
        } catch (e) {
            return false;
        }
    }

    async login(email: string, senha: string) {
        const cliente = await this.Cliente.findOne({ senha: senha, email: email}).exec();
        if (!cliente) throw new UnauthorizedException('Usuário não encontrado.');

        return {
            token: this.createToken(cliente),
            cliente,
        };
    }
}