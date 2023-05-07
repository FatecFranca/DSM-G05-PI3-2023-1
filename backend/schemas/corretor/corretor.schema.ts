import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { enderecoSchema } from "../endereco.shema";

@Schema()
export class Corretor {
    @Prop({required: true})
    nome: string

    @Prop({required: true, unique: true})
    cpf: string

    @Prop({required: true})
    telefone: string

    @Prop({required: true, unique: true})
    email: string

    @Prop({required: true})
    senha: string

    @Prop({required: false, type: enderecoSchema})
    endereco: {enderecoSchema}

    @Prop({required: true})
    role: number

    @Prop({required: true, default: new Date()})
    createdAt: Date

    @Prop({required: true, default: new Date()})
    updatedAt: Date
}

export const CorretorSchema = SchemaFactory.createForClass(Corretor);