"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnAgendaDTO = void 0;
const return_cliente_dto_1 = require("../../cliente/dtos/return-cliente.dto");
const return_corretor_dto_1 = require("../../corretor/dtos/return-corretor.dto");
const return_imovol_dto_1 = require("../../imovel/dtos/return-imovol.dto");
class ReturnAgendaDTO {
    constructor(agenda) {
        this.id = agenda.id;
        this.nome = agenda.nome;
        this.data = agenda.data;
        this.horario = agenda.horario;
        this.cliente = agenda.cliente
            ? new return_cliente_dto_1.ReturnClienteDTO(agenda.cliente) : undefined;
        this.imovel = agenda.imovel
            ? new return_imovol_dto_1.ReturnImovelDTO(agenda.imovel) : undefined;
        this.corretor = agenda.corretor
            ? new return_corretor_dto_1.ReturnCorretorDTO(agenda.corretor) : undefined;
    }
}
exports.ReturnAgendaDTO = ReturnAgendaDTO;
//# sourceMappingURL=return-agenda.dto.js.map