import { TipoCliente } from './tipo-cliente.enum';
import { Endereco } from './endereco';
export class Cliente {

    constructor(
         public id: number, 
         private theNome: string, 
         private theRg: number, 
         private theTelefone: string, 
         private theEmail: string, 
         private theProfissao: string, 
         private theEndereco: Endereco, private tipo: TipoCliente) {}  

}
