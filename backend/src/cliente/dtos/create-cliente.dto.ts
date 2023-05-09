import { IsString, IsNumber, IsOptional, MinLength, MaxLength } from "class-validator";
import { Document } from "mongoose";

export class CreateClienteDTO extends Document {
    @IsString()
    nome: string

    @IsString()
    telefone: string

    @IsString()
    cpf: string

    @IsString()
    email: string

    @IsNumber()
    role: number

    @IsOptional()
    @IsString()
    endereco: string[]

    @IsString()
    @MinLength(6)
    @MaxLength(12)
    senha: string
}