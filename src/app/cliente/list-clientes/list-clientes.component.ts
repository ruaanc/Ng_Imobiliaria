import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente'

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService, private clientes: Cliente[]) {
    this.clientes = this.clienteService.getAll()
   }



  ngOnInit() {
  }

}
