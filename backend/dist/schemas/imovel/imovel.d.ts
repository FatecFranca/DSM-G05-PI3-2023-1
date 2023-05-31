import { Document } from "mongoose";
export declare class Imovel extends Document {
    proprietario: string;
    area: string;
    qtde_quartos: number;
    qtde_banheiros: number;
    valor: number;
    tipo: string;
    finalidade: string;
    endereco: string[];
}
