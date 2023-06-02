import {CanActivate, Injectable, ExecutionContext} from '@nestjs/common'
import { AuthClienteService } from '../auth/auth-cliente.service';
import { ClienteService } from '../cliente/cliente.service';

@Injectable()
export class AuthClienteGuard implements CanActivate {
    constructor(
        private readonly authClienteService: AuthClienteService,
        private readonly clienteService: ClienteService
    ) {}

    async canActivate(ctx: ExecutionContext) {
        const request = ctx.switchToHttp().getRequest();
        const {authorization} = request.headers;
        
        try {
            const data = this.authClienteService.checkToken((authorization ?? '').split(' ')[1])

            request.tokenPayload = data;
            request.user = await this.clienteService.getById(data.id);

            return request.user;
        } catch (error) {
            return false;
        }
    }
}