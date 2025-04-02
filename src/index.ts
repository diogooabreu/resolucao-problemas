import Multiplo from "./multiplo";
import Primo from "./primo";
import { Validity } from "./validade";

//data de validade
let teste1 = new Validity(10, 2, 2025);
console.log(teste1.validity()); 
let teste2 = new Validity(9, 2, 1997);
console.log(teste2.validity()); 
let teste3 = new Validity(5, 5, 2012);
console.log(teste3.validity());
let teste4 = new Validity(13, 5, 2012);
console.log(teste4.validity())

//multiplo
let test1 = new Multiplo(10, 2);
console.log(test1.verifica()); 
let test2 = new Multiplo(1000, 2);
console.log(test2.verifica()); 
let test3 = new Multiplo(5, 21);
console.log(test3.verifica()); 

let primo = new Primo(5);
console.log(primo.isPrimo());
let primo2 = new Primo(15);
console.log(primo2.isPrimo());
let primo3 = new Primo(144);
console.log(primo3.isPrimo());
let primo4 = new Primo(1);
console.log(primo4.isPrimo());