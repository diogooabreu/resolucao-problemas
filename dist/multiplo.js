"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multiplo {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    verifica() {
        this.multiplo = this.b + (this.a - (this.b % this.a));
        return this.multiplo;
    }
}
exports.default = Multiplo;
