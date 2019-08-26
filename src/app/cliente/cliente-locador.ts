import { Endereco } from './endereco';
import { Cliente } from './cliente';
export class ClienteLocador extends Cliente {
    private cpf: string

    constructor(theNome: string, theRg: number, theTelefone: string, theEmail: string,theProfissao: string, theEndereco: Endereco, theCpf: string) {
        super(theNome, theRg, theTelefone, theEmail, theProfissao, theEndereco)
        this.cpf = theCpf
	}
}
