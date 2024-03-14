let meuMap = new Map();

meuMap.set("nome", "carlos");
meuMap.set("stack", "html, css, js");


console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has('nome'))


// meuMap.clear()

console.log(meuMap.size)


for (let chave of meuMap.keys()){
    console.log(chave)
}


for (let valor of meuMap.values()){
    console.log(valor)
}
const array = ['carlos', 'carlos', 'gouvea', 'junior' ]
const arrayComoSet = new Set ([...array])
const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)

console.log(arrayComoSet)
