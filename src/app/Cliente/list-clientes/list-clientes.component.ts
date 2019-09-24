import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente'

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  public clientes: Cliente[]
  public paginaAtual = 1; 

  constructor(private clienteService: ClienteService) {
    this.clientes = this.clienteService.getAll()
   }

   

  ngOnInit() {
  }

}
