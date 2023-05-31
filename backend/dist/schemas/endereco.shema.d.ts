import * as mongoose from 'mongoose';
export declare const enderecoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento?: string;
}>> & Omit<mongoose.FlatRecord<{
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
