import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema()
export class Agenda {
    @Prop({required: true})
    nome: string

    @Prop({required: true})
    data: string

    @Prop({required: true})
    horario: string

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'CreateClienteDTO'})
    cliente: string[]

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'CreateCorretorDTO'})
    corretor: string[]

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'CreateImovelDTO'})
    imovel: string[]

    @Prop({required: true, default: new Date()})
    createdAt: Date

    @Prop({required: true, default: new Date()})
    updatedAt: Date
}

export const AgendaSchema = SchemaFactory.createForClass(Agenda);