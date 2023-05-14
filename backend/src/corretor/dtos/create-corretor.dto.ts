import { IsString, IsNumber, IsOptional, MinLength, MaxLength, IsEmail } from "class-validator";
import { Document } from "mongoose";

export class CreateCorretorDTO extends Document {
    @IsString()
    nome: string

    @IsString()
    telefone: string

    @IsString()
    cpf: string

    @IsEmail()
    email: string

    @IsOptional()
    @IsString()
    endereco: string[]

    @IsString()
    @MinLength(6)
    @MaxLength(12)
    senha: string
}