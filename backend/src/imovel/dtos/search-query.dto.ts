import { IsNumber, IsString } from "class-validator";

export class QueryParamsDTO {
    @IsString()
    proprietario: RegExp;

    @IsNumber()
    valor: number;

    @IsString()
    endereco: string
}