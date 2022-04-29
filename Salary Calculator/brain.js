export let salaryCal = {

    basicSalary: 0,
    HRA() {
        return this.basicSalary * 0.5;
    },
    DA() {
        return this.basicSalary * 0.2;
    },
    TA() {
        return this.basicSalary * 0.3;
    },
    MA() {
        return this.basicSalary * 0.15;
    },
    PF() {
        return this.basicSalary * 0.05;
    },
    GS() {
        return this.basicSalary + this.HRA() + this.DA() + this.MA();
    },
    NS() {
        return this.GS() - this.PF();
    }
}