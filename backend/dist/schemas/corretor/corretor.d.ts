import { Document } from "mongoose";
export declare class Corretor extends Document {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    senha: string;
    endereco: string[];
}
