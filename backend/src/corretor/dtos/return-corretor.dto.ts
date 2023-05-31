import { CreateCorretorDTO } from "./create-corretor.dto";

export class ReturnCorretorDTO {
    constructor(corretor: CreateCorretorDTO) {
        this.id = corretor.id;
        this.nome = corretor.nome;
        this.telefone = corretor.telefone;
        this.cpf = corretor.cpf;
        this.email = corretor.email;
        this.endereco = corretor.endereco;
    }

    id: string;
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    endereco?: string[];
}  