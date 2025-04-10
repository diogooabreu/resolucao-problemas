export default class Primos {
    private n: number;
    private primos: number[] = [2];

    public constructor(n: number) {
        this.n = n;
        this.primosAntes(); 
    }

    //método get pra poder capturar o valor no console.log
    public getPrimos(): number[] {
        return this.primos;
    }

    //método pra ir ierando de 3 até n, passando só pelos impares
    //a cada nova iteração eu faço uma chamada da função que verifica se o contador(j) é primo, ele é passado como parâmetro
    public primosAntes(): number[] {
        for (let j = 3; j < this.n; j += 2){
            if (this.isPrimo(j))
                this.primos.push(j);
        }
        return this.primos;
    }

    //Aqui eu faço a verificação pra validar se numero x é primo ou não
    //recebo o j como parâmetro
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