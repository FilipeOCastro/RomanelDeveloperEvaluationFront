import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-visualizar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.scss']
})
export class VisualizarClienteComponent {
  clienteId: string = '';
  cliente: Cliente | null = null;

  constructor(private clienteService: ClienteService) {}

  buscarCliente() {
    this.clienteService.obterCliente(this.clienteId).subscribe({
      next: (cliente) => this.cliente = cliente,
      error: (err) => alert('Erro ao buscar cliente: ' + err.message)
    });
  }
}