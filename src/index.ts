import Multiplo from "./multiplo";
import { Validade } from "./validade";

//data de validade
let teste1 = new Validade(10, 2, 2025);
console.log(teste1.validity()); 
let teste2 = new Validade(1000, 2, 1997);
console.log(teste2.validity()); 
let teste3 = new Validade(5, 5, 2012);
console.log(teste3.validity());
let teste4 = new Validade(13, 5, 2012);
console.log(teste4.validity())

//multiplo
let test1 = new Multiplo(10, 2);
console.log(test1.verifica()); 
let test2 = new Multiplo(1000, 2);
console.log(test2.verifica()); 
let test3 = new Multiplo(5, 21);
console.log(test3.verifica()); 