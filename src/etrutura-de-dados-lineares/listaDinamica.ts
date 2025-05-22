export default class ListaDinamica {
    private lista: number[] = [];

    public constructor(n: number) {
        this.lista = [];
        for (let i = 0; i < n; i++) {
            const alaeatorio = Math.floor(Math.random() * 100) + 1;
            this.lista.push(alaeatorio);
        }
    }

    public removePares(): void {
        let newList: number[] = [];

        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i] % 2 !== 0)
                newList.push(this.lista[i]);
        }

        this.lista = newList;
    }

    public inserir(n: number): void {
        this.lista.push(n);
    }

    public show(): void {
        let exibe = '';
        for (let i = 0; i < this.lista.length; i++) {
            exibe += this.lista[i] + (i < this.lista.length - 1 ? ', ' : '');
        }

        console.log(`[${exibe}]`);
    }

    public amplitude(): number {
        let arr = [...this.lista];
        //calcular a diferença entre o maior e menor numeros do array
        let maior = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maior)
                maior = arr[i];
        }
  
        return maior;
     }
}

const lista = new ListaDinamica(10);
console.log('Lista original:');
lista.show();

lista.removePares();
console.log('Após remover pares:');
lista.show();

lista.inserir(77);
console.log('Após inserir 77:');
lista.show();
console.log(lista.amplitude());