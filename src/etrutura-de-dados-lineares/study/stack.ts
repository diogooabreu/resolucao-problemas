export default class Stack<T> { //o <T> sugere que será passsado um tipo dinâmico
    private items: T[] = [];

    //adicionar ao fim da fila
    push(element: T): void {
        this.items.push(element);
    }

    //remover da fila
    pop(): T | undefined {
        return this.items.pop();
    }

    //apenas verifica o topo da fila, ultimo elemento adicionado
    peek(): T | undefined {
        return this.items[this.items.length -1]
    }

    //verifica se a pilha está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const pilha = new Stack<number>();
pilha.push(10);
pilha.push(20);
console.log(pilha.isEmpty());
console.log(pilha.peek());
pilha.pop();
console.log(pilha.peek());
pilha.pop();
console.log(pilha.isEmpty());