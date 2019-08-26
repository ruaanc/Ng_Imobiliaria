import { Endereco } from './endereco';
import { Cliente } from './cliente';
export class ClienteLocatario extends Cliente {
    private cnpj: string


	constructor(theNome: string, theRg: number, theTelefone: string, theEmail: string,theProfissao: string, theEndereco: Endereco, theCnpj: string) {
        super(theNome, theRg, theTelefone, theEmail, theProfissao, theEndereco)
        this.cnpj = theCnpj
	}

}
