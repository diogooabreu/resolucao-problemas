export default class Primo {
    public num: number;

    public constructor(num: number) {
        this.num = num;
    }

    public isPrimo() {
        let raiz = Math.sqrt(this.num);

        if (this.num <= 1)
            return `Não é primo`;

        for (let i = 2; i <= raiz; i++)
                if (this.num % i == 0)
                    return `Não é primo`;
        
        return `É primo`;
    }
}

//testes
let test = new Primo(1);
console.log(test.isPrimo());
let test1 = new Primo(2);
console.log(test1.isPrimo());
let test2 = new Primo(7);
console.log(test2.isPrimo());