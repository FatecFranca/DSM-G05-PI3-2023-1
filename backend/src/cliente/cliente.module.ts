import { Module } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { ClienteController } from "./cliente.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ClienteSchema } from "../../schemas/cliente/cliente.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'CreateClienteDTO', schema: ClienteSchema }]),
    ],
    exports: [ClienteService],
    controllers: [ClienteController],
    providers: [ClienteService],
})
export class ClienteModule { }