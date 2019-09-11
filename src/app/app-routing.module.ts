import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientesComponent } from './Cliente/list-clientes/list-clientes.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: 'clientes', component: ListClientesComponent },
  { path: 'loading', component: LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
