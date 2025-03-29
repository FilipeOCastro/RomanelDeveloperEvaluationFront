import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://localhost:57808/api/clientes';

  constructor(private http: HttpClient) {}

  criarCliente(cliente: Cliente): Observable<string> {
    return this.http.post<string>(this.apiUrl, cliente);
  }

  obterCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }
}