import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { enderecoSchema } from '../endereco.shema';

@Schema()
export class Imovel {
  @Prop({ required: true })
  proprietario: string;

  @Prop({ required: true })
  area: string;

  @Prop({ required: true })
  qtde_quartos: number;

  @Prop({ required: true })
  qtde_banheiros: number;

  @Prop({ required: true })
  valor: string;

  @Prop({ required: true })
  finalidade: string;

  @Prop({ required: false, type: enderecoSchema })
  endereco: { enderecoSchema };

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true, default: new Date() })
  createdAt: Date;

  @Prop({ required: true, default: new Date() })
  updatedAt: Date;
}

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
