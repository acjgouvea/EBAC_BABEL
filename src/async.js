function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('deu erro')
    }
})

// console.log("incio")
// // console.log(funcaoMuitoPesada())
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
// console.log("fim")

async function execucaoPrincipal () {
console.log("incio")
try {
    const resultado = await funcaoMuitoPesadaPromise;
console.log(resultado)
console.log("fim")
} catch(e) {
    console.log(e)
}

}

// const promissComParametros = (login, senha) => {
//     return new Promise ((resolve, reject) => )
// }

execucaoPrincipal()