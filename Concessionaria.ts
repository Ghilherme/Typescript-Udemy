import Carro from './Carro'

export default class Concessionaria{
    private endereco:string
    private listaDeCarros: Array<Carro>

    constructor(endereco:string, listadeCarros: Array<Carro>){
        this.listaDeCarros = listadeCarros
        this.endereco=endereco
    }

    public fornecedorEndereco():string{

        return this.endereco
    }

    public MostrarListaCarros():Array<Carro>{
        return this.listaDeCarros
    }
}