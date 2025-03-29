import { Routes } from '@angular/router';
import { CriarClienteComponent } from './components/criar-cliente/criar-cliente.component';
import { VisualizarClienteComponent } from './components/visualizar-cliente/visualizar-cliente.component';

export const routes: Routes = [
  { path: 'criar-cliente', component: CriarClienteComponent },
  { path: 'visualizar-cliente', component: VisualizarClienteComponent },
  { path: '', redirectTo: '/criar-cliente', pathMatch: 'full' },
  { path: '**', redirectTo: '/criar-cliente' }
];