"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enderecoSchema = void 0;
const mongoose = require("mongoose");
exports.enderecoSchema = new mongoose.Schema({
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
//# sourceMappingURL=endereco.shema.js.map