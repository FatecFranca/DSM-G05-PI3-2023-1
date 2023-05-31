import { Document } from "mongoose";
export declare class CreateClienteDTO extends Document {
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    role: number;
    endereco: string[];
    senha: string;
}
