"use strict";

var alunos = [{
  nome: "Pedro",
  nota: 5
}, {
  nome: "Lucas",
  nota: 7
}, {
  nome: "Gian",
  nota: 8
}, {
  nome: "Caio",
  nota: 10
}, {
  nome: "Gouvea",
  nota: 3
}];
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);