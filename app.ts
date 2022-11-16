import { ContaCorrente, SeguroDeVida } from "./questao10";
import { AuditoriaInterna } from "./questao11";
import { Square, Rectangle, Circulo } from "./questao7";


// testes da questão 7
let quadrado: Square = new Square(3);
let circulo: Circulo = new Circulo(4);
let retangulo: Rectangle = new Rectangle(5, 3);

console.log('\nQuestão 7\n');


console.log('Area do quadrado de lado 3: '+quadrado.calcularArea());
console.log('Perimetro do quadrado de lado 3: '+quadrado.calularPerimetro());
console.log();

console.log('Area do circulo de raio 4: '+circulo.calcularArea());
console.log('Perimetro do circulo de raio 4: '+circulo.calularPerimetro());
console.log();

console.log('Area do retangulo de base 5/altura 3: '+retangulo.calcularArea());
console.log('Perimetro do retangulo de base 5/altura 3: '+retangulo.calularPerimetro());
console.log();

// testes da questão 9
console.log('Questão 9\n');

console.log('circulo | retangulo '+circulo.comparar(retangulo));
console.log('circulo | quadrado '+circulo.comparar(quadrado));
console.log('circulo | circulo '+circulo.comparar(circulo));
console.log('quadrado | retangulo '+quadrado.comparar(retangulo));
console.log();

// testes da questão 12

let conta1: ContaCorrente = new ContaCorrente('Osvaldo', 100);
let conta2: ContaCorrente = new ContaCorrente('Lula', 1000);
let conta3: ContaCorrente = new ContaCorrente('Bolsonaro', 10000);
let conta4: ContaCorrente = new ContaCorrente('Nicolas', 1000);
let conta5: SeguroDeVida = new SeguroDeVida();
let conta6: SeguroDeVida = new SeguroDeVida();
let conta7: SeguroDeVida = new SeguroDeVida();

let auditoria: AuditoriaInterna = new AuditoriaInterna();
auditoria.adicionar(conta1);
auditoria.adicionar(conta2);
auditoria.adicionar(conta3);
auditoria.adicionar(conta4);
auditoria.adicionar(conta5);
auditoria.adicionar(conta6);
auditoria.adicionar(conta7);

console.log('\nQuestão 12\n');


console.log('Valor total dos tributos: '+auditoria.calcularTributos());





