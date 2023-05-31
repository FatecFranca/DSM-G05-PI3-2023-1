import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateCorretorDTO } from '../corretor/dtos/create-corretor.dto';
import { Corretor } from '../../schemas/corretor/corretor';
export declare class AuthCorretorService {
    private readonly JWTService;
    private readonly corretor;
    private issuer;
    private audience;
    constructor(JWTService: JwtService, corretor: Model<CreateCorretorDTO>);
    createToken(corretor: Corretor): {
        accessToken: string;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, senha: string): Promise<{
        token: {
            accessToken: string;
        };
        cliente: import("mongoose").Document<unknown, {}, CreateCorretorDTO> & Omit<CreateCorretorDTO & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
}
