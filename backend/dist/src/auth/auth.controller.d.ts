import { AuthClienteService } from './auth-cliente.service';
import { AuthCorretorService } from './auth-corretor.service';
import { AuthLoginDTO } from './dtos/login.dto';
export declare class AuthController {
    private readonly authClienteService;
    private readonly authCorretorService;
    constructor(authClienteService: AuthClienteService, authCorretorService: AuthCorretorService);
    cliente({ email, senha }: AuthLoginDTO): Promise<{
        token: {
            accessToken: string;
        };
        cliente: import("mongoose").Document<unknown, {}, import("../cliente/dtos/create-cliente.dto").CreateClienteDTO> & Omit<import("../cliente/dtos/create-cliente.dto").CreateClienteDTO & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    corretor({ email, senha }: AuthLoginDTO): Promise<{
        token: {
            accessToken: string;
        };
        cliente: import("mongoose").Document<unknown, {}, import("../corretor/dtos/create-corretor.dto").CreateCorretorDTO> & Omit<import("../corretor/dtos/create-corretor.dto").CreateCorretorDTO & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
}
