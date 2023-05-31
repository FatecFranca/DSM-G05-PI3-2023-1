"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnClienteDTO = void 0;
class ReturnClienteDTO {
    constructor(cliente) {
        this.id = cliente.id;
        this.nome = cliente.nome;
        this.telefone = cliente.telefone;
        this.cpf = cliente.cpf;
        this.email = cliente.email;
        this.endereco = cliente.endereco;
    }
}
exports.ReturnClienteDTO = ReturnClienteDTO;
//# sourceMappingURL=return-cliente.dto.js.map