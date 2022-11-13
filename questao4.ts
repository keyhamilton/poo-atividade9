abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class Quadrado extends FiguraGeometrica {
    private _lado: number;
    constructor(lado: number){
        super();
        this._lado = lado;
    }

    calcularArea(): number {
        return this._lado ** 2;
    }

    calcularPerimetro(): number {
        return this._lado * 4;
    }
}

class Retangulo extends FiguraGeometrica {
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number){
        super();
        this._base = base;
        this._altura = altura;
    }

    calcularArea(): number {
        return this._base * this._altura;
    }

    calcularPerimetro(): number {
        return 2 * (this._base + this._altura);
    }
}

