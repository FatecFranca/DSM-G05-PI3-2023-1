import { Document } from "mongoose";

export class Cliente extends Document {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    senha: string;
    endereco: string[];
}