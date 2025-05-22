export default class Balanco {
    private expressao: string;

    public constructor(expressao: string) {
        this.expressao = expressao;
    }

    public taBalanceada(): boolean {
        let pilha: string[] = [];

        for (let i = 0; i < this.expressao.length; i++) {
            const char = this.expressao[i];

            if (char === '(') {
                pilha[pilha.length] = '(';
            } else if (char === ')') {
                if (pilha.length === 0) {
                    return false;
                }

                pilha.length = pilha.length - 1;
            }
        }
        return pilha.length === 0;
    }
}

const teste = new Balanco("(()(()))");
console.log(teste.taBalanceada()); // false