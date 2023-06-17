import { IsNumber, IsString } from 'class-validator';

export class QueryParamsDTO {
  @IsString()
  titulo: RegExp;

  @IsNumber()
  valor: number;

  @IsString()
  endereco: string;
}
