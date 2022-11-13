class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number){
        this._nome = nome;
        this._saldo = saldo;
    }

    public setNome(nome: string){
        this._nome = nome;
    }

    public getNome(): string {
        return this._nome;
    }

    public setSaldo(saldo: number){
        this._saldo = saldo;
    }

    public getSaldo(): number {
        return this._saldo;
    }
}

interface Tributavel {
    calcularTributos(): number;
}


class ContaCorrente extends Conta implements Tributavel{
    calcularTributos(): number {
        return this.getSaldo() * 0.1;
    }
}

class SeguroDeVida extends Conta implements Tributavel {
    calcularTributos(): number {
        return 50;
    }
}

export { ContaCorrente, SeguroDeVida, Tributavel };