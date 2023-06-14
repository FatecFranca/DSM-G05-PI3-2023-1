export interface Cliente {
  id?: string;
  nome?: string;
  telefone?: string;
  cpf?: string;
  email?: string;
  endereco?: Address;
  senha?: string;
}

interface Address {
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}
