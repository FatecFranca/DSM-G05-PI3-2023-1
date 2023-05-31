import { CreateCorretorDTO } from "./create-corretor.dto";
export declare class ReturnCorretorDTO {
    constructor(corretor: CreateCorretorDTO);
    id: string;
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    endereco?: string[];
}
