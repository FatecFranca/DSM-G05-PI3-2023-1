import {Module, forwardRef} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClienteModule } from '../cliente/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from '../../schemas/cliente/cliente.schema';
import { AuthController } from './auth.controller';
import { AuthClienteService } from './auth-cliente.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
            secret: process.env.JWT_SECRETE
        }),
        forwardRef(() => ClienteModule),
        MongooseModule.forFeature([{name: 'CreateClienteDTO', schema: ClienteSchema}]),
    ],
    controllers: [AuthController],
    exports: [AuthClienteService],
    providers: [AuthClienteService]
})
export class AuthModule {}