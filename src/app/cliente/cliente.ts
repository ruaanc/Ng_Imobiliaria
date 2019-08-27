import { Endereco } from './endereco';
export class Cliente {
    public id: number
    private _nomeCompleto: string
    private _rg: number
    private _telefone: string
    private _email: string
    private _profissao: string
    private _endereco: Endereco


    constructor(theNome: string, theRg: number, theTelefone: string, theEmail: string,theProfissao: string, theEndereco: Endereco) {

        this._nomeCompleto = theNome
        this._rg = theRg
        this._telefone = theTelefone
        this._email = theEmail
        this._profissao = theProfissao
        this._endereco = theEndereco
        this._endereco = theEndereco

    }
    

}
