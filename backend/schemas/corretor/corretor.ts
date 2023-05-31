import { Document } from "mongoose";

export class Corretor extends Document {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    senha: string;
    endereco: string[];
}