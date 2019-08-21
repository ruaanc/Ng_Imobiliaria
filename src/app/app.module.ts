import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ListClientesComponent } from './cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    EditClienteComponent,
    ListClientesComponent,
    NewClienteComponent,
    ShowClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
