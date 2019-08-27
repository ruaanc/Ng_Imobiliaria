import { AppService } from './../app.service';
import { Cliente } from './cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  lastId = 0

  clientes: Cliente[] = []

  constructor(private appService: AppService) { }

  // Simulação do POST /clientes
  add(cliente: Cliente): Cliente {
    if (cliente.id == null) {
      cliente.id = ++this.lastId
    }
    this.clientes.push(cliente)
    return cliente
  }

  // Simulação do DELETE /clientes/:id
  delete(id: number) {
    this.clientes = this.clientes.filter(todo => todo.id !== id)
  }

  // Simulação do GET /clientes
  getAll(): Cliente[] {
    return this.clientes
  }

  // Simulação do GET /clientes/:id
  getById(id: number): Cliente {
    return this.clientes.filter(todo => todo.id === id).pop();
  }

  // Simulação do PUT /clientes/:id
  update(novoCliente: Cliente): Cliente {
    const velhoCliente = this.getById(novoCliente.id)
    if (!velhoCliente) {
      return 
    }
    Object.assign(velhoCliente, novoCliente)
    return velhoCliente
  }

  changeMessage(message: string) {
    this.appService.changeMessage(message)
  }

  clearMessage() {
    this.appService.clearMessage()
  }

}
