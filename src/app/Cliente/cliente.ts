import { TipoCliente } from './tipo-cliente.enum';
import { Endereco } from './endereco';
export class Cliente {

    constructor(
         public id: number, 
         private nome: string, 
         private rg: number, 
         private telefone: string, 
         private email: string, 
         private profissao: string, 
         private endereco: Endereco, 
         private tipo: TipoCliente) {}  

}
