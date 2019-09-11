import { Endereco } from './endereco';
import { Cliente } from './cliente';
import { TipoCliente } from './tipo-cliente.enum';
export class ClienteLocatario extends Cliente {


	constructor(
        theId: number, 
        theNome: string, 
        theRg: number, 
        theTelefone: string, 
        theEmail: string,
        theProfissao: string, 
        theEndereco: Endereco, 
        tipo: string, 
        private theCnpj: string) {
        super(theId, theNome, theRg, theTelefone, theEmail, theProfissao, theEndereco, tipo)
	}

}
