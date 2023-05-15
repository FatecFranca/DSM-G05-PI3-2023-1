import { IsString } from "class-validator";
import { Document, Schema } from "mongoose";

export class CreateAgendaDTO extends Document {
    @IsString()
    nome: string

    @IsString()
    data: string

    @IsString()
    horario: string

    @IsString()
    cliente_id: Schema.Types.ObjectId | any

    @IsString()
    imovel_id: Schema.Types.ObjectId | any

    @IsString()
    corretor_id: Schema.Types.ObjectId | any
}