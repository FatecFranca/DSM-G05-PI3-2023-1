import { CreateClienteDTO } from "./create-cliente.dto";
export declare class ReturnClienteDTO {
    constructor(cliente: CreateClienteDTO);
    id: string;
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    endereco?: string[];
}
