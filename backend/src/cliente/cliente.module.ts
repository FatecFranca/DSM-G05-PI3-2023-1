import { Module, forwardRef } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { ClienteController } from "./cliente.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ClienteSchema } from "../../schemas/cliente/cliente.schema";
import { AuthModule } from "../auth/auth.module";
import { CorretorModule } from "../corretor/corretor.module";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'CreateClienteDTO', schema: ClienteSchema }]),
        forwardRef(() => AuthModule),
        forwardRef(() => CorretorModule),
    ],
    exports: [ClienteService],
    controllers: [ClienteController],
    providers: [ClienteService],
})
export class ClienteModule { }