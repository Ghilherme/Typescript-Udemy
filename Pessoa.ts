import Carro from './Carro'

export default class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferido:string){
        this.nome=nome
        this.carroPreferido=carroPreferido
    }

    public dizerNome(): string{
        return "Olá " + this.nome
    }

    public dizerCarroqueTem():Carro{
        return this.carro
    }

    public dizerCarroPreferido(): string{
        return  this.carroPreferido
    }

    public comprarCarro(carro: Carro): string{
        this.carro = carro
        return "Parabens voce comprou o " + this.carro.mostraModelo()
    }    
}