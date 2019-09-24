import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditClienteComponent } from './../edit-cliente/edit-cliente.component';
import { ListClientesComponent } from './../list-clientes/list-clientes.component';
import { NewClienteComponent } from './../new-cliente/new-cliente.component';
import { ShowClienteComponent } from './../show-cliente/show-cliente.component';
import { ClienteService } from './../cliente.service';
import { OpcoesClientesComponent } from './../opcoes-clientes/opcoes-clientes.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    EditClienteComponent,
    ListClientesComponent,
    NewClienteComponent,
    ShowClienteComponent,
    OpcoesClientesComponent  
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    EditClienteComponent,
    ListClientesComponent,
    NewClienteComponent,
    ShowClienteComponent,
    OpcoesClientesComponent  
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
