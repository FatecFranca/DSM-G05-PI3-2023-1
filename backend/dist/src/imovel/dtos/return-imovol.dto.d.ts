import { CreateImovelDTO } from "./create-imovel.dto";
export declare class ReturnImovelDTO {
    constructor(imovel: CreateImovelDTO);
    id: string;
    proprietario: string;
    area: string;
    qtde_quartos: number;
    qtde_banheiros: number;
    valor: number;
    tipo: string;
    finalidade: string;
    endereco: string[];
}
