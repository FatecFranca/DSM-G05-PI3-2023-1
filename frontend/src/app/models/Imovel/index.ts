export interface Imovel {
  id?: string;
  valor?: string;
  finalidade?: string;
  qtde_quartos?: number;
  qtde_banheiros?: number;
  endereco?: Address;
  area?: string;
  proprietario?: string;
  titulo?: string;
  descricao?: string;
}

interface Address {
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}
