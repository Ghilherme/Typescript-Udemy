"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
// ==== Criar regras de negócio
//Criar carros
var carroA = new Carro_1.default("Cruze", 4);
var carroB = new Carro_1.default("veloster", 3);
var carroC = new Carro_1.default("Uno", 2);
var ArrayCarros = [carroA, carroB, carroC];
//cria concessionaria
var concessionariaNois = new Concessionaria_1.default("Av Paulista", ArrayCarros);
// comprar carro
var cliente = new Pessoa_1.default("Gui", "Cruze");
concessionariaNois.MostrarListaCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra carro
        console.log(cliente.comprarCarro(carro));
    }
});
console.log(cliente.dizerCarroqueTem());
