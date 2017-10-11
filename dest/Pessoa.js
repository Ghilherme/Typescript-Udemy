"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return "Olá " + this.nome;
    };
    Pessoa.prototype.dizerCarroqueTem = function () {
        return this.carro;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
        return "Parabens voce comprou o " + this.carro.mostraModelo();
    };
    return Pessoa;
}());
exports.default = Pessoa;
