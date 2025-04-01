export class Validade {
    private static readonly Day = 12;
    private static readonly Month = 5;
    private static readonly Year = 2012;

    public validDay: number;
    public validMonth: number;
    public validYear: number;

    public constructor(day: number, month: number, year: number) {
        this.validDay = day;
        this.validMonth = month;
        this.validYear = year;
    }

    public validity(): string {
        if (this.validYear > Validade.Year) {
            return "Is not expired!!";
        } else if (this.validYear < Validade.Year) {
            return "Is expired!!"
        } else {
            if (this.validMonth < Validade.Month) {
                return "Is expired!!";
            } else if (this.validMonth > Validade.Month) {
                return "Is Not expired!!";
            } else {
                if (this.validDay <= Validade.Day) {
                    return "Is expired!!";
                }
                return "Is not expired!!";
            }
        }
    }
}