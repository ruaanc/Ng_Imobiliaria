import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ListClientesComponent } from './cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { ShowContratoComponent } from './Contrato/show-contrato/show-contrato.component';
import { EditContratoComponent } from './Contrato/edit-contrato/edit-contrato.component';
import { ListContratoComponent } from './Contrato/list-contrato/list-contrato.component';
import { NewContratoComponent } from './Contrato/new-contrato/new-contrato.component';
import { NewImovelComponent } from './Imovel/new-imovel/new-imovel.component';
import { EditImovelComponent } from './Imovel/edit-imovel/edit-imovel.component';
import { ListImovelComponent } from './Imovel/list-imovel/list-imovel.component';
import { ShowImovelComponent } from './Imovel/show-imovel/show-imovel.component';
import { ShowUsuarioComponent } from './Usuario/show-usuario/show-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EditClienteComponent,
    ListClientesComponent,
    NewClienteComponent,
    ShowClienteComponent,
    ShowContratoComponent,
    EditContratoComponent,
    ListContratoComponent,
    NewContratoComponent,
    NewImovelComponent,
    EditImovelComponent,
    ListImovelComponent,
    ShowImovelComponent,
    ShowUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
