export class Endereco {
    private _rua: string
    private _numero: number
    private _cidade: string
    private _estado: string

    constructor(theRua: string, theNumero: number, theCidade: string, theEstado: string) {
        this._rua = theRua
        this._numero = theNumero
        this._cidade = theCidade
        this._estado = theEstado
    }
    
    get getRua(): string {
        return this._rua;
    }

    set setRua(rua: string) {
        this._rua = rua
    }

    get getNumero(): number {
        return this._numero;
    }

    set setNumero(numero: number) {
        this._numero = numero
    }

    get getCidade(): string {
        return this._cidade;
    }

    set setCidade(cidade: string) {
        this._cidade = cidade
    }

    get getEstado(): string {
        return this._estado;
    }

    set setEstado(estado: string) {
        this._estado = estado
    }

}
