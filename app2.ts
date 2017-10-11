import Pessoa from './Pessoa'
import Carro from './Carro'
import Concessionaria from './Concessionaria'

// ==== Criar regras de negócio
//Criar carros
let carroA = new Carro("Cruze", 4)
let carroB = new Carro("veloster",3)
let carroC = new Carro("Uno",2)

let ArrayCarros: Carro[]= [carroA,carroB,carroC]

//cria concessionaria
let concessionariaNois = new Concessionaria("Av Paulista", ArrayCarros)

// comprar carro
let cliente = new Pessoa("Gui","Cruze")

concessionariaNois.MostrarListaCarros().map((carro: Carro) =>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //compra carro

        console.log(cliente.comprarCarro(carro));
    }

})

console.log(cliente.dizerCarroqueTem())