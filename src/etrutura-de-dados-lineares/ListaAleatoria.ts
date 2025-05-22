export default class ListaAleatoria {
    private lista: number[] = [];

    public constructor(tam: number) {
        this.lista = [];
        for (let i = 0; i < tam; i++) {
            const newLista = Math.floor(Math.random() * 100) + 1;
            this.lista.push(newLista);
        }
    }

    //retorna string
    public toString(): string {
        return 'Lista: [ ' + this.lista.join(', ') + ' ]';
    }

    //remove os menores que n
    public valorCorte(n: number): void {
        for (let i = this.lista.length -1; i >= 0; i--) {
            if (n > this.lista[i])
                this.lista.splice(i, 1);
        }

        console.log('Maiores que n: ', this.lista)
    }

    //remove multiplos
    public removeMultiplos(n: number): void {
        if (n === 0) {
            console.log('Era zero: ', this.lista);
        }
        
        for (let i = this.lista.length - 1; i >= 0; i--) {
            if ((i + 1) % n === 0)
                this.lista.splice(i, 1);
        }

        console.log('Multiplos removidos: ', this.lista);
    }
}

const teste = new ListaAleatoria(5);
console.log(teste.toString());
teste.valorCorte(35);
teste.removeMultiplos(0);
teste.removeMultiplos(2);

/**
 * remover os numeros que estiverem na posição que seja multiplo de n
 * ex: [1, 3, 15, 16, 19, 20, 3, 9] n = 3 -> remove das posições 3, 6, 9, 12
 * saída deve ser: [1, 3, 15, 19, 20, 9]
 * 
 */