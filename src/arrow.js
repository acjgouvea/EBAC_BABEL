const minhaFuncao = () => "diz oi";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabrica: 'Ford',
})

console.log(minhaFuncao())


console.log(retornaUmCarro)

const carro= {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velociadadeAtual += 10;
    },
    frear: () => {
        this.velociadadeAtual -= 10;
    }
}


console.log(carro.velocidadeAtual)