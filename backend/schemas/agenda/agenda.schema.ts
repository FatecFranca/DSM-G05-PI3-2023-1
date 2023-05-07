import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema()
export class Agenda {
    @Prop({required: true})
    data: string

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'CreateClienteDTO'})
    cliente_id: string[]

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'CreateCorretorDTO'})
    corretor_id: string[]

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'CreateImovelDTO'})
    imovel_id: string[]

    @Prop({required: true, default: new Date()})
    createdAt: Date

    @Prop({required: true, default: new Date()})
    updatedAt: Date
}

export const AgendaSchema = SchemaFactory.createForClass(Agenda);