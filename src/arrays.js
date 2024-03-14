const redes = ['Facebook', 'Instagram', 'X'];

for (let i = 0; i < redes.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redes[i]}`)
}

redes.forEach(function (nomeDaRede) {
    console.log(`Eu tenho perfil na rede social: ${nomeDaRede}`)

})

const alunos = ['gustavo', 'marcos', 'julia', 'marcela'];

const alunos1 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }

})

alunos1.push({
    nome : 'lucas',
    curso : 'Backend'
})

const marcos = alunos1.find(function (item) {
    return item.nome == 'marcos'
})


const gustavo = alunos1.findIndex(function (item) {
    return item.nome == 'gustavo'
})


const materiaAlunos1 = alunos1.every(function(item){
    return item.curso === 'Frontend'
})



console.log(gustavo);

console.log(marcos);

console.log(alunos1);

console.log(materiaAlunos1);

// const numeros = [1, 2, 3, 4, 5]
// const dobroNumeros = numeros.map(function (numeroAtual) {
//     return numeroAtual * 2;

// })


// console.log(dobroNumeros)
