import { ReturnClienteDTO } from "../../cliente/dtos/return-cliente.dto";
import { ReturnCorretorDTO } from "../../corretor/dtos/return-corretor.dto";
import { ReturnImovelDTO } from "../../imovel/dtos/return-imovol.dto";
import { CreateAgendaDTO } from "./create-agenda.dto";
export declare class ReturnAgendaDTO {
    constructor(agenda: CreateAgendaDTO);
    id: string;
    nome: string;
    data: string;
    horario: string;
    cliente: ReturnClienteDTO;
    imovel: ReturnImovelDTO;
    corretor: ReturnCorretorDTO;
}
