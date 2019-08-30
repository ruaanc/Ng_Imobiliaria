import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientesComponent } from './Cliente/list-clientes/list-clientes.component';

const routes: Routes = [
  { path: 'clientes', component: ListClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
