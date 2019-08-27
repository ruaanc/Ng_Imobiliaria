import { Component } from '@angular/core';
import { ClienteLocatario } from './../cliente-locatario';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente'
import { Endereco } from './../endereco';
import { ClienteLocador } from './../cliente-locador';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent {
  
  tipoCLiente: string
  cliente: Cliente
  endereco: Endereco

  constructor(private clienteService: ClienteService ) { }

  onSubmit(form: any){
    this.endereco = new Endereco(form.rua, form.numero, form.cidade, form.estado)
    if(this.tipoCLiente.toUpperCase() == 'LOCATARIO'){
      this.cliente = new ClienteLocatario(null, form.name, form.rg, form.telefone, form.email, form.profissao, this.endereco, null)
    }else{
      this.cliente = new ClienteLocador(null, form.name, form.rg, form.telefone, form.email, form.profissao, this.endereco, null)
    }
    this.cliente = this.clienteService.add(this.cliente)
    this.clienteService.changeMessage(`Cliente criado com sucesso !`)
  }

}
