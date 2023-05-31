import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCorretorDTO } from '../corretor/dtos/create-corretor.dto';
import { Corretor } from '../../schemas/corretor/corretor';

@Injectable()
export class AuthCorretorService {
    private issuer = 'login';
    private audience = 'users';
    constructor(
        private readonly JWTService: JwtService,
        @InjectModel('CreateCorretorDTO') private readonly corretor: Model<CreateCorretorDTO>
    ) { }

    createToken(corretor: Corretor) {
        return {
            accessToken: this.JWTService.sign(
                {
                    id: corretor._id,
                    nome: corretor.nome,
                    email: corretor.email,
                },
                {
                    expiresIn: '7 days',
                    subject: String(corretor._id),
                    issuer: this.issuer,
                    audience: this.audience,
                }
            )
        }
    }

    checkToken(token: string) {
        try {
            const data = this.JWTService.verify(token, {
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
        const corretor = await this.corretor.findOne({ senha: senha, email: email}).exec();
        if (!corretor) throw new UnauthorizedException('Usuário não encontrado.');

        return {
            token: this.createToken(corretor),
            cliente: corretor,
        };
    }
}