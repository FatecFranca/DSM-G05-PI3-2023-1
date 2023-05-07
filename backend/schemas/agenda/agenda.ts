import { Document } from "mongoose";

export class Agenda extends Document {
    nome: string;
    data: string;
    // cliente_id: CreateClienteDTO[];
    // imovel_id: CreateImovelDTO[];
    // corretor_id: CreateCorretorDTO[];
}