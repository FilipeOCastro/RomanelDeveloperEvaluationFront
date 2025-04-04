import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-criar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.scss']
})
export class CriarClienteComponent {
  cliente: Cliente = {
    nome: '',
    cpf: '',
    razaoSocial: '',
    cnpj: '',
    tipoCliente: 'PessoaFisica', // default
    dataNascimento: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private clienteService: ClienteService) {}

  onSubmit() {
    const clienteToSend: any = {
      ...this.cliente,
      dataNascimento: new Date(this.cliente.dataNascimento).toISOString(),
      tipoCliente: this.cliente.tipoCliente === 'PessoaFisica' ? 0 : 1, // enum
      nome: this.cliente.tipoCliente === 'PessoaFisica' ? this.cliente.nome : '',
      cpf: this.cliente.tipoCliente === 'PessoaFisica' ? this.cliente.cpf : '',
      razaoSocial: this.cliente.tipoCliente === 'PessoaJuridica' ? this.cliente.razaoSocial : '',
      cnpj: this.cliente.tipoCliente === 'PessoaJuridica' ? this.cliente.cnpj : ''
    };
    console.log('Payload enviado:', JSON.stringify(clienteToSend));
    this.clienteService.criarCliente(clienteToSend).subscribe({
      next: (response) => {
        console.log('Resposta da API:', response); 
        alert(`Cliente criado com ID: ${response}`);
        this.resetForm();
      },
      error: (err) => {
        console.error('Erro completo:', err);
        const errorMessage = err.error ? JSON.stringify(err.error) : err.message;
        alert('Erro ao criar cliente: ' + errorMessage);
      }
    });
  }

  resetForm() { this.cliente = {
    nome: '',
    cpf: '',
    razaoSocial: '',
    cnpj: '',
    tipoCliente: 'PessoaFisica',
    dataNascimento: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  };
 }
}