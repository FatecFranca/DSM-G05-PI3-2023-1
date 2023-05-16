import { IsNumber, IsString } from "class-validator";

export class QueryParamsDTO {
    @IsString()
    nome: RegExp;

    @IsString()
    email: string;

    @IsNumber()
    cpf: string
}