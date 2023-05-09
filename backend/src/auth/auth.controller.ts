import {Controller, Post, Body} from '@nestjs/common'
import { AuthClienteService } from './auth-cliente.service';
import { AuthLoginDTO } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authClienteService: AuthClienteService) {}

    @Post('login')
    async cliente(@Body() {email, senha}: AuthLoginDTO) {
        return await this.authClienteService.login(email, senha)
    }
}