import { Document } from 'mongoose';
import { CreateClienteDTO } from '../../src/cliente/dtos/create-cliente.dto';
import { CreateImovelDTO } from '../../src/imovel/dtos/create-imovel.dto';
import { CreateCorretorDTO } from '../../src/corretor/dtos/create-corretor.dto';

export class Agenda extends Document {
  nome: string;
  data: string;
  horario: string;
  observacao: string;
  telefone: string;
  cliente_id: CreateClienteDTO[];
  imovel_id: CreateImovelDTO[];
  corretor_id: CreateCorretorDTO[];
}
