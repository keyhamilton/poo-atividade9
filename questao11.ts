import { Tributavel } from './questao10'

class AuditoriaInterna {
    private _contas: Tributavel[] = [];

    public adicionar(conta: Tributavel): void {
        this._contas.push(conta);
    }

    public calcularTributos(): number {
        let soma = 0;
        for(let conta of this._contas){
            soma += conta.calcularTributos();
        }
        return soma;
    }
}

export { AuditoriaInterna };