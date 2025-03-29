export interface Cliente {
  nome: string | null;
  cpf: string | null;
  razaoSocial: string | null;
  cnpj: string | null;
  tipoCliente: 'PessoaFisica' | 'PessoaJuridica'; 
  dataNascimento: string;
  telefone: string;
  email: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}