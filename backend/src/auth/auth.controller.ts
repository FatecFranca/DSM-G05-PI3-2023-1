import {Controller, Post, Body} from '@nestjs/common'
import { AuthClienteService } from './auth-cliente.service';
import { AuthCorretorService } from './auth-corretor.service';
import { AuthLoginDTO } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authClienteService: AuthClienteService,
        private readonly authCorretorService: AuthCorretorService,
    ) {}

    @Post('login/cliente')
    async cliente(@Body() {email, senha}: AuthLoginDTO) {
        return await this.authClienteService.login(email, senha)
    }

    @Post('login/corretor')
    async corretor(@Body() {email, senha}: AuthLoginDTO) {
        return await this.authCorretorService.login(email, senha)
    }
}