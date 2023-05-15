import { IsString, IsNumber } from "class-validator";
import { Document } from "mongoose";

export class CreateImovelDTO extends Document {
    @IsString()
    proprietario: string

    @IsString()
    area: string

    @IsNumber()
    qtde_quartos: number

    @IsNumber()
    qtde_banheiros: number

    @IsNumber()
    valor: number
    
    @IsString()
    tipo: string

    @IsString()
    finalidade: string

    @IsString()
    endereco: string[]

}