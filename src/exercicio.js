const alunos = [
    { nome: "Pedro", nota: 5 },
    { nome: "Lucas", nota: 7 },
    { nome: "Gian", nota: 8 },
    { nome: "Caio", nota: 10 },
    { nome: "Gouvea", nota: 3 }
];


function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);