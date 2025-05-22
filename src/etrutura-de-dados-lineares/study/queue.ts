export default class Queue<T>{
    private items: T[] = [];

    //adiciona um elemento ao final da fila
    enQueue(element: T): void {
        this.items.push(element);
    }

    //remove o primeiro elemento da fila
    deQueue(): T | undefined {
        return this.items.shift();
    }

    dento(): void{
        console.log(this.items);
    }

    //verifica o primeiro elemento da fila, sem remover
    front(): T | undefined {
        return this.items[0];
    }

    //
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<string>();
queue.enQueue('Tablets');
queue.enQueue('Câmera');
queue.dento();
console.log(queue.front());
queue.deQueue();
console.log(queue.front());
console.log(queue.isEmpty());