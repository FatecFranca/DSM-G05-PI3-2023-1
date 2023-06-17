import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

export class CreateAgendaDTO extends Document {
  @IsString()
  nome: string;

  @IsString()
  data: string;

  @IsString()
  horario: string;

  @IsString()
  observacao: string;

  @IsString()
  telefone: string;

  @IsString()
  cliente: Schema.Types.ObjectId | any;

  @IsString()
  imovel: Schema.Types.ObjectId | any;

  @IsString()
  corretor: Schema.Types.ObjectId | any;
}
