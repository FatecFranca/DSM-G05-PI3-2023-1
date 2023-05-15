import { CreateImovelDTO } from "./create-imovel.dto";

export class ReturnImovelDTO {
    constructor(imovel: CreateImovelDTO) {
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

    id: string;
    proprietario: string
    area: string
    qtde_quartos: number
    qtde_banheiros: number
    valor: number
    tipo: string
    finalidade: string
    endereco: string[]
}