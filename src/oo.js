// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon; 
// }


// const pikachu = new Pokemon("Pikachu", "Elétrico")

class Pokemon {
#hp = 100;

    // nome = '';
    // tipo = '';
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.hp -= 10;
    }
}

class Pikachu extends Pokemon {
constructor () {
    super('pikachu', 'eletrico')
}

atacar() {
    console.log(`${this.nome} atacou comchoque do travao`)

}
}
const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh.hp)
pikachuDoAsh.atacar()



// const pikachuDoAsh = new Pikachu('pikachu', 'eletrico');

const pikachu = new Pokemon('pikachu', 'eletrico');
pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'eletrico';

console.log(pikachu);
console.log(pikachuDoAsh);