import { Comparavel } from "./questao8";

interface AreaPerimetro {
    calcularArea(): number;
    calularPerimetro(): number;
}

class Circulo implements AreaPerimetro, Comparavel{
    private _raio: number;

    constructor(raio: number){
        this._raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this._raio**2;
    }

    calularPerimetro(): number {
        return Math.PI * this._raio * 2;
    }

    comparar(figura: AreaPerimetro): number {
        let result = this.calcularArea() - figura.calcularArea();
        if(result > 0){
            return 1;
        } else if(result < 0){
            return -1;
        } else {
            return 0;
        }
    }
}

class Square implements AreaPerimetro {
    private _lado: number;
    constructor(lado: number){
        this._lado = lado;
    }

    calcularArea(): number {
        return this._lado**2;
    }

    calularPerimetro(): number {
        return this._lado * 4;
    }

    comparar(figura: AreaPerimetro): number {
        let result = this.calcularArea() - figura.calcularArea();
        if(result > 0){
            return 1;
        } else if(result < 0){
            return -1;
        } else {
            return 0;
        }
    }
    
}

class Rectangle implements AreaPerimetro {
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number){
        this._base = base;
        this._altura = altura;
    }

    calcularArea(): number {
        return this._base * this._altura;
    }

    calularPerimetro(): number {
        return 2 * (this._base + this._altura);
    }

    comparar(figura: AreaPerimetro): number {
        let result = this.calcularArea() - figura.calcularArea();
        if(result > 0){
            return 1;
        } else if(result < 0){
            return -1;
        } else {
            return 0;
        }
    }
}

export { Square, Circulo, Rectangle, AreaPerimetro };