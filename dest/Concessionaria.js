"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listadeCarros) {
        this.listaDeCarros = listadeCarros;
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecedorEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.MostrarListaCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
