export class Validity {
    private static readonly Day = 31;
    private static readonly Month = 3;
    private static readonly Year = 2025;

    private validDay: number;
    private validMonth: number;
    private validYear: number;

    public constructor(day: number, month: number, year: number) {
        this.validDay = day;
        this.validMonth = month;
        this.validYear = year;
    }

    public verificaValidity(): string {
        if (this.validYear > Validity.Year) {
            return `No expired`;
        }
        if (this.validYear < Validity.Year) {
            return `Expired.`
        }
        if (this.validYear == Validity.Year && this.validMonth < Validity.Month) {
            return `Expired.`
        }
        if (this.validMonth == Validity.Month && this.validDay < Validity.Day) {
            return `Expired`;
        }
        return `No expired.`
    }
}

let teste = new Validity(1, 1, 2023);
console.log(teste.verificaValidity());
let teste1 = new Validity(1, 11, 2023);
console.log(teste1.verificaValidity());
let teste2 = new Validity(1, 4, 2025);
console.log(teste2.verificaValidity());
let teste3 = new Validity(1, 11, 2025);
console.log(teste3.verificaValidity())
let teste4 = new Validity(1, 3, 2026);
console.log(teste4.verificaValidity())


