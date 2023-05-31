import * as mongoose from "mongoose";
export declare class Agenda {
    nome: string;
    data: string;
    horario: string;
    cliente: string[];
    corretor: string[];
    imovel: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const AgendaSchema: mongoose.Schema<Agenda, mongoose.Model<Agenda, any, any, any, mongoose.Document<unknown, any, Agenda> & Omit<Agenda & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Agenda, mongoose.Document<unknown, {}, mongoose.FlatRecord<Agenda>> & Omit<mongoose.FlatRecord<Agenda> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
