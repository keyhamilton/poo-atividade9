abstract class Funcionario {
    protected salario: number;
    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario {
    getBonificacao(): number {
        return this.salario * 0.4;
    }
}

class Diretor extends Gerente {
    getBonificacao(): number {
        return this.salario * 0.6;
    }
}

class Presidente extends Funcionario {
    getBonificacao(): number {
        let total = 1000;
        total += this.salario;
        return total;
    }
}

let gerente: Gerente = new Gerente(100);
let diretor: Diretor = new Diretor(100);
let presidente: Presidente = new Presidente(100);

console.log('Bonus gerente: '+gerente.getBonificacao());
console.log('Bonus diretor: '+diretor.getBonificacao());
console.log('Bonus presidente: '+presidente.getBonificacao());

