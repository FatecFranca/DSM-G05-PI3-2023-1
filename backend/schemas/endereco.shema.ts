import * as mongoose from 'mongoose';

export const enderecoSchema = new mongoose.Schema({
    rua: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    complemento: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
});
