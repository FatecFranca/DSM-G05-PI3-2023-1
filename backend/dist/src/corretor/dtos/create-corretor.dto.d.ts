import { Document } from "mongoose";
export declare class CreateCorretorDTO extends Document {
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    endereco: string[];
    senha: string;
}
