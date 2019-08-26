import { Endereco } from './endereco';
export class Cliente {
    public id: number;

    constructor(
       private  nomeCompleto: string,
       private rg: number,
       private telefone: string,
       private email: string,
       private profissao: string,
       private endereco: Endereco

    ) {}

}
