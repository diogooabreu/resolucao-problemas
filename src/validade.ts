export class Validity {
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
        if (this.validYear > Validity.Year)
            return `Is not expired.`;
        if (this.validYear < Validity.Year)
            return `Expired!`;
        if (this.validMonth < Validity.Month)
            return `Expired!!`;
        if (this.validDay < Validity.Day)
            return `Is expired!!!!`;
        return `Is not expired.`

    }
}



