"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnImovelDTO = void 0;
class ReturnImovelDTO {
    constructor(imovel) {
        this.id = imovel.id;
        this.proprietario = imovel.proprietario;
        this.area = imovel.area;
        this.qtde_banheiros = imovel.qtde_banheiros;
        this.qtde_quartos = imovel.qtde_quartos;
        this.valor = imovel.valor;
        this.tipo = imovel.tipo;
        this.finalidade = imovel.finalidade;
        this.endereco = imovel.endereco;
    }
}
exports.ReturnImovelDTO = ReturnImovelDTO;
//# sourceMappingURL=return-imovol.dto.js.map