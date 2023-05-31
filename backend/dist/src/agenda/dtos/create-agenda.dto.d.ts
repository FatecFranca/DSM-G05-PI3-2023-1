import { Document, Schema } from "mongoose";
export declare class CreateAgendaDTO extends Document {
    nome: string;
    data: string;
    horario: string;
    cliente: Schema.Types.ObjectId | any;
    imovel: Schema.Types.ObjectId | any;
    corretor: Schema.Types.ObjectId | any;
}
