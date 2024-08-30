export interface Data {
    //constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
} 

export class Data implements Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    
    public compara(outraData: Data): number {
        if ((this.dia  === outraData.dia ) && (this.mes  === outraData.mes) && (this.ano === outraData.ano)) {
            // As datas são iguais
            console.log("As datas são iguais")
            return 1
        }
        return -1;
    }
    public getDia(): number {
        return this.dia;
    }
    public getMes(): number {   
        return this.mes;
    }
    public getAno(): number {
        return this.ano;
    }
    public getMesExtenso(): string {
        const mes = ['janeiro','fevereito','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
        return mes[this.mes - 1];
    }
    public getDataExtenso(): string {
        return `${this.dia} de ${this.getMesExtenso()} de ${this.ano}`;
    }
    public isBissexto(): boolean {
        if (this.ano % 4 !== 0) {
            return false;
        } else if (this.ano % 100 === 0 && this.ano % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    }
    public clone(): Data {
        return new Data(this.dia, this.mes, this.ano);
    }
}