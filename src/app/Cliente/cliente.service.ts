import { Injectable } from '@angular/core';
import { Endereco } from './endereco';
import { ClienteLocador } from './cliente-locador';
import { AppService } from './../app.service';
import { Cliente } from './cliente';
import { TipoCliente } from './tipo-cliente.enum';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  lastId = 0

  end1: Endereco = new Endereco('Rua Francisco Gerbasi', 1600, 'Rio Tinto', 'Paraíba')
  end2: Endereco = new Endereco('Rua José Gouveia', 130, 'Mamanguape', 'Paraíba')
  end3: Endereco = new Endereco('Rua Carlos Siqueira', 90, 'Itapororoca', 'Paraíba')
  end4: Endereco = new Endereco('Rua Eugênio Rabelo', 187, 'Alagoinha', 'Paraíba')
  end5: Endereco = new Endereco('Rua Francelino Cordeiro', 143, 'Santa Rita', 'Paraíba')
  end6: Endereco = new Endereco('Rua Direita', 161, 'Goiana', 'Pernambuco')
  end7: Endereco = new Endereco('Rua Roger Selenium', 11, 'Pedra de Fogo', 'Paraíba')
  end8: Endereco = new Endereco('Rua Alba de Souza', 10, 'Goiana', 'Pernambuco')
  end9: Endereco = new Endereco('Rua Rogério Carneiro', 129, 'Aliança', 'Pernambuco')
  end10: Endereco = new Endereco('Rua Alto de Cima', 19, 'Timbaúba', 'Pernambuco')
  
  cli1: Cliente = new ClienteLocador(1, 'Ana Silva', 776325413, '(83) 9663-0456', 'ana.silva@gmail.com','Motorista', this.end1, 'LOCADOR' , '1086003541')
  cli2: Cliente = new ClienteLocador(2, 'Gilvan Pereira', 476383930, '(83) 9602-2464', 'gilvan@gmail.com','Motorista', this.end2, 'LOCADOR', '982873672')
  cli3: Cliente = new ClienteLocador(3, 'Carlos Alves',72378203, '(83) 8689-8268', 'carlos@gmail.com','Motorista', this.end3, 'LOCATARIO', '8738783299')
  cli4: Cliente = new ClienteLocador(4, 'Eduardo Lobo', 90824893, '(83) 8181-8844', 'eduardo@gmail.com','Motorista', this.end4, 'LOCATARIO', '048463830')
  cli5: Cliente = new ClienteLocador(5, 'Felipe Cordeiro', 836528309, '(83) 8738-8390', 'felipe@gmail.com','Motorista', this.end5, 'LOCATARIO', '94736483')
  cli6: Cliente = new ClienteLocador(6, 'Elder Pinelli', 768293865, '(81) 9216-3861', 'elder@gmail.com','Motorista', this.end6, 'LOCATARIO', '98463649')
  cli7: Cliente = new ClienteLocador(7, 'Vitor Santana', 436398473, '(83) 9932-2611', 'vitor@gmail.com','Motorista', this.end7, 'LOCATARIO', '098328738')
  cli8: Cliente = new ClienteLocador(8, 'Lucas Fonseca', 84739092, '(83) 4047-0456', 'lucas@gmail.com','Motorista', this.end8, 'LOCATARIO', '0974692337')
  cli9: Cliente = new ClienteLocador(9, 'Alexandre Darze', 907539840, '(83) 5482-5888', 'alexandre@gmail.com','Motorista', this.end9, 'LOCATARIO', '097463297')
  cli10: Cliente = new ClienteLocador(10, 'André Varejão', 907439862, '(83) 9601-6238', 'andre@gmail.com','Motorista', this.end1, 'LOCATARIO', '9438428629')

  clientes: Cliente[] = [this.cli1, this.cli2, this.cli3, this.cli4, this.cli5, this.cli6, this.cli7, this.cli8, this.cli9, this.cli10]

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
