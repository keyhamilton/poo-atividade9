1. Podemos instanciar classes abstratas? Justifique.

    R: Não podem ser instanciadas porque são apenas um rascunho que serve de modelo para uma classe descendente, a qual implementa de fato os métodos de uma classe abstrata.

2. Explique o que é necessário para que a compilação da ClasseConcreta ocorra
sem erros:

abstract class ClasseAbstrata {             
    abstract imprimaAlgo(): void ;
}

class ClasseConcreta extends
    ClasseAbstrata {
}

    R: O método imprimaAlgo() precisa ser implementado na classe concreta.

3. Se uma classe que herda de uma abstrata e não implementa os seus métodos, o
que ocorre?

    R: Essa classe continua sendo abstrata, pois só passa a ser concreta se implementar os métodos definidos na classe abstrata.


5. Não podemos aplicar o operador new em FiguraGeometrica, mas por que então
podemos realizar o seguinte código de instanciação:

abstract class FiguraGeometrica {
    //...
}

let figuras: FiguraGeometrica[] = new Array();

R: A variável figuras é na verdade é uma instância de Array e não de FiguraGeométrica.
Para comprovar isso basta investigar o tipo de figuras usando o operador instanceof.

# Nota

Todos os testes estão reunidos em app.ts e devidamente delimitados por comentários indicando o inicio de cada teste.

# Nota 2

Para gerar os diagramas de classe, basta usar o arquivo questao4.plantuml. Para isso, se faz necessário ter o plantuml instalado no vscode.
