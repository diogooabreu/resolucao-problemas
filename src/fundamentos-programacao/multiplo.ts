export default class Multiplo {
    public a: number;
    public b: number;
    private multiplo!: number;

    public constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public verifica(): number {
        this.multiplo = this.b + (this.a - (this.b % this.a));
        return this.multiplo;
    }
}


let test1 = new Multiplo(10, 2);
console.log(test1.verifica()); 
let test2 = new Multiplo(1000, 2);
console.log(test2.verifica()); 
let test3 = new Multiplo(5, 21);
console.log(test3.verifica()); 