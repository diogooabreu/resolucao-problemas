export default class Balanceamento {
    private expressao: string;

    public constructor(expressao: string) {
        this.expressao = expressao;
    }

    //precisa avaliar se está na ordem { [ ( ) ] }, e todo caractere precisa ter um fechamento.
    public balanceada(): void {
        let pilha: string[] = [];

        for (let i = 0; i < this.expressao.length; i++) {
            const char = this.expressao[i];

            if (char === '{' || char === '[' || char === '(') {
                pilha.push(char);
            } else if (char === '}' || char === ']' || char === ')') {
                if (pilha.length === 0) {
                    console.log('Expressão inválida');
                    return;
                }

                const top = pilha[pilha.length - 1];

                if (
                    (char === '}' && top === '{') ||
                    (char === ']' && top === '[') ||
                    (char === ')' && top === '(')
                ) {
                    pilha.length = pilha.length - 1;
                } else {
                    console.log('Expressão inválida.')
                    return;
                }
            }
        }

        if (pilha.length === 0) {
            console.log('Expressão válida');
            return;
        }
    }
}

const teste = new Balanceamento('{[()]}');
const teste1 = new Balanceamento('{[()]}'); // válida
const teste2 = new Balanceamento('{[(])}'); // inválida
const teste3 = new Balanceamento('{[()}');  // inválida
const teste4 = new Balanceamento('{[()]}]'); // inválida

teste1.balanceada();
teste2.balanceada();
teste3.balanceada();
teste4.balanceada();
teste.balanceada();