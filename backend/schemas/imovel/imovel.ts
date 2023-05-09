import { Document } from "mongoose";

export class Imovel extends Document {
    proprietario: string;
    area: string;
    qtde_quartos: string;
    qtde_banheiros: string;
    valor: number;
    tipo: string;
    finalidade: string;
    endereco: string[];
}