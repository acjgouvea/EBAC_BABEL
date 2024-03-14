function somar() {
let soma = 0;

for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
}
return soma;
}


console.log(somar(10, 20, 30))


function somarComRest(...numeros) {
const soma = numeros.reduce((total, numeroAtual) =>{
    total += numeroAtual;
    return total;
}, 0)
return soma;
}

console.log(somarComRest(12, 23, 324))


/// spred.

const numeros = [1,2,3,4]
console.log(...numeros)

const timeFutSp = ['santos', 'palmeiras', 'bragantino'];
const timeFutRj = ['vasco', 'botafogo', 'flamengo'];
// const timeFut = timeFutRj.concat.(timeFutSp);
const timeFut = [...timeFutSp, ...timeFutRj];


console.log(timeFut)

const carroJulia  = {
    modelo: 'gol',
    marca: 'vw',
    motor: '1.8',
}


const carroAna  = {
    ...carroJulia,
    motor: '2.0',
}


console.log(carroAna);

///destruturação 


const { motor: motorCarroAna } = carroAna; 


const { motor: motorCarroJulia } = carroJulia; 

console.log(motorCarroJulia);

console.log(motorCarroAna); 


const [item1, item2, item3, ...outrosTime ] = timeFut;

