"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validade = void 0;
class Validade {
    constructor(day, month, year) {
        this.validDay = day;
        this.validMonth = month;
        this.validYear = year;
    }
    validity() {
        if (this.validYear > Validade.Year) {
            return "Is not expired!!";
        }
        else if (this.validYear < Validade.Year) {
            return "Is expired!!";
        }
        else {
            if (this.validMonth < Validade.Month) {
                return "Is expired!!";
            }
            else if (this.validMonth > Validade.Month) {
                return "Is Not expired!!";
            }
            else {
                if (this.validDay <= Validade.Day) {
                    return "Is expired!!";
                }
                return "Is not expired!!";
            }
        }
    }
}
exports.Validade = Validade;
Validade.Day = 12;
Validade.Month = 5;
Validade.Year = 2012;
