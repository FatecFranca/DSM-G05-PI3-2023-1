import { CreateClienteDTO } from "./create-cliente.dto";

export class ReturnClienteDTO {
    constructor(cliente: CreateClienteDTO) {
        this.id = cliente.id;
        this.nome = cliente.nome;
        this.telefone = cliente.telefone;
        this.cpf = cliente.cpf;
        this.email = cliente.email;
        this.endereco = cliente.endereco;
    }
    
    id: string;
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    endereco?: string[];
}