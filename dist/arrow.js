"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "diz oi";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabrica: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro);
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velociadadeAtual += 10;
  },
  frear: function frear() {
    _this.velociadadeAtual -= 10;
  }
};
console.log(carro.velocidadeAtual);