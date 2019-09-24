import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientesComponent } from './Cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './Cliente/new-cliente/new-cliente.component';

const routes: Routes = [
  { path: '', component: ListClientesComponent }, 
  { path: 'newCliente', component: NewClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
