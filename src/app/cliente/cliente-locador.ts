import { Endereco } from './endereco';
import { Cliente } from './cliente';
export class ClienteLocador extends Cliente {
    private cpf: string

    constructor (theId: number, theNome: string, theRg: number, theTelefone: string, theEmail: string,theProfissao: string, theEndereco: Endereco, theCpf: string) {
        super(theId, theNome, theRg, theTelefone, theEmail, theProfissao, theEndereco)
        this.cpf = theCpf
	}
}
