import { ReturnClienteDTO } from "../../cliente/dtos/return-cliente.dto";
import { ReturnCorretorDTO } from "../../corretor/dtos/return-corretor.dto";
import { ReturnImovelDTO } from "../../imovel/dtos/return-imovol.dto";
import { CreateAgendaDTO } from "./create-agenda.dto";

export class ReturnAgendaDTO {
    constructor(agenda: CreateAgendaDTO) {
        this.id = agenda.id;
        this.nome = agenda.nome;
        this.data = agenda.data;
        this.horario = agenda.horario;
        this.cliente = agenda.cliente
            ? new ReturnClienteDTO(agenda.cliente) : undefined

        this.imovel = agenda.imovel
            ? new ReturnImovelDTO(agenda.imovel) : undefined

        this.corretor = agenda.corretor
            ? new ReturnCorretorDTO(agenda.corretor) : undefined
    }

    id: string;
    nome: string;
    data: string;
    horario: string;
    cliente: ReturnClienteDTO;
    imovel: ReturnImovelDTO;
    corretor: ReturnCorretorDTO;
}