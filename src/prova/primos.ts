export default class Primos {
    private n: number;
    private primos: number[] = [2];

    public constructor(n: number) {
        this.n = n;
        this.primosAteN(); 
    }

    public getPrimos(): number[] {
        return this.primos;
    }

    public primosAteN(): number[] {
        for (let j = 3; j < this.n; j += 2){
            if (this.isPrimo(j))
                this.primos.push(j);
        }
        return this.primos;
    }

    public isPrimo(j: number): boolean {
        let raiz = Math.sqrt(j);

        if (j <= 1) {
            return false;
        } 

        for (let i = 2; i <= raiz; i++) {
            if (j % i == 0)
                return false;
        }

        return true;
    }
}

//testes
let teste = new Primos(100);
console.log(teste.getPrimos());
let teste1 = new Primos(997);
console.log(teste1.getPrimos());