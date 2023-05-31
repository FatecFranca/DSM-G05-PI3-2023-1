import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateClienteDTO } from '../cliente/dtos/create-cliente.dto';
import { Cliente } from '../../schemas/cliente/cliente';
export declare class AuthClienteService {
    private readonly JWTService;
    private readonly Cliente;
    private issuer;
    private audience;
    constructor(JWTService: JwtService, Cliente: Model<CreateClienteDTO>);
    createToken(cliente: Cliente): {
        accessToken: string;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, senha: string): Promise<{
        token: {
            accessToken: string;
        };
        cliente: import("mongoose").Document<unknown, {}, CreateClienteDTO> & Omit<CreateClienteDTO & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
}
