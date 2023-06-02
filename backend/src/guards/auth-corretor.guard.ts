import {CanActivate, Injectable, ExecutionContext} from '@nestjs/common'
import { AuthCorretorService } from '../auth/auth-corretor.service';
import { CorretorService } from '../corretor/corretor.service';

@Injectable()
export class AuthCorretorGuard implements CanActivate {
    constructor(
        private readonly authCorretorService: AuthCorretorService,
        private readonly corretorService: CorretorService
    ) {}

    async canActivate(ctx: ExecutionContext) {
        const request = ctx.switchToHttp().getRequest();
        const {authorization} = request.headers;
        
        try {
            const data = this.authCorretorService.checkToken((authorization ?? '').split(' ')[1])

            request.tokenPayload = data;
            request.user = await this.corretorService.getById(data.id);

            return request.user;
        } catch (error) {
            return false;
        }
    }
}