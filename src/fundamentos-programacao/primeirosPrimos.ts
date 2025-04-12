export default class primeirosPrimos {
    private n: number;
    private primeirosPrimos: number[] = [2];

    public constructor(n: number) {
        this.n = n;
        this.adicionaPrimos();
    }

    public getPrimeiosPrimos(): number[] {
        return this.primeirosPrimos;
    }

    public adicionaPrimos(): number[] {
        for (let j = 3; this.primeirosPrimos.length < this.n; j += 2) {
            if (this.isPrimo(j))
                this.primeirosPrimos.push(j)
        }
        return this.primeirosPrimos;
    }

    public isPrimo(j: number): boolean {
        let raiz = Math.sqrt(j);

        if (j <= 1) {
            return false;
        }

        for (let i = 2; i <= raiz; i++) {
            if (j % i == 0) {
                return false;
            }
        }

        return true;
    }
}

let teste = new primeirosPrimos(4);
console.log(teste.getPrimeiosPrimos());
let teste3 = new primeirosPrimos(1);
console.log(teste3.getPrimeiosPrimos());
let teste2 = new primeirosPrimos(10);
console.log(teste2.getPrimeiosPrimos());
let teste1 = new primeirosPrimos(25);
console.log(teste1.getPrimeiosPrimos());