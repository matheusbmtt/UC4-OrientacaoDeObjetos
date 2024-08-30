"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
var rl = require("readline-sync");
var Contador = /** @class */ (function () {
    function Contador(valorContador) {
        this.valorContador = valorContador;
    }
    //Começo o contador zerando ele
    Contador.prototype.zerar = function () {
        this.valorContador = 0;
    };
    // Incrimento em um em um
    Contador.prototype.incrimentar = function () {
        this.valorContador += 1;
        // OU this.valorContador = this.valorContador + this.valorContador 
    };
    //Retorna o Valor atual do Contador
    Contador.prototype.valor = function () {
        return this.valorContador;
    };
    return Contador;
}());
exports.Contador = Contador;
var contador1 = new Contador(10);
console.log(contador1.valorContador);
contador1.incrimentar();
console.log(contador1.valorContador);
contador1.zerar();
console.log(contador1.valorContador);