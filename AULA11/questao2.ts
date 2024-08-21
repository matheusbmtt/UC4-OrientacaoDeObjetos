let reader = require("readline-sync")

export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): void;
    clone(): Data;
}

export class Data implements Data{
    public dia: number
    public mes: number
    public ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    public getData(): void{
        console.log(`${this.dia}/${this.getMesExtenso()}/${this.ano}`)
    }

    public setData(): void{
        let diaNovo = reader.questionInt("Insira o dia da data: ")
        let mesNovo = reader.questionInt("Insira o mes da data: ")
        let anoNovo = reader.questionInt("Insira o ano da data: ")

        this.dia = diaNovo
        this.mes = mesNovo
        this.ano = anoNovo
    }
    public compara(outraData: Data): void{
        if(this.dia == outraData.dia){
            console.log(`Os dias são iguais`)
        } else {
            console.log(`Os dias são diferentes`)
        }

        if(this.mes == outraData.mes){
            console.log(`Os meses são iguais`)
        } else {
            console.log(`Os meses são diferentes`)
        }

        if(this.ano == outraData.ano){
            console.log(`Os anos são iguais`)
        } else {
            console.log(`Os anos são diferentes`);
        }
    }

    public getDia(): number{
        return this.dia
    }

    public getMes(): number{
        return this.mes
    }

    public getMesExtenso(): void{
        switch(this.mes){
            case 1:
                console.log(`Janeiro`)
                break
            case 2:
                console.log(`Fevereiro`)
                break
            case 3:
                console.log(`Março`)
                break
            case 4:
                console.log(`Abril`)
                break
            case 5:
                console.log(`Maio`)
                break
            case 6:
                console.log(`Junho`)
                break
            case 7:
                console.log(`Julho`)
                break
            case 8:
                console.log(`Agosto`)
                break
            case 9:
                console.log(`Setembro`)
                break
            case 10:
                console.log(`Outubro`)
                break
            case 11:
                console.log(`Novembro`)
                break
            case 12:
                console.log(`Dezembro`)
                break
            
        }
    }

    public getAno(): number{
        return this.ano
    }

    public isBissexto(): void{
        if(this.ano == 2000 || this.ano == 1000 || this.ano == 0){
            console.log(`O ano é bissexto =)`)
        } else if(this.ano % 4 == 0 && this.ano % 100 != 0 ) {
            console.log(`O ano é bissexto =)`)
        } else {
            console.log(`O ano não é bissexto =(`)
        }
    }

    public clone(): Data{
        let cloneData = new Data(this.dia, this.mes, this.ano)
        return cloneData
    }
}

//testes

let objUm = new Data(10, 2, 2000)
let objDois = new Data(11, 2, 2001)
let objTres = objUm.clone()

console.log(`Comparando datas: `)

objUm.compara(objDois)
objUm.compara(objTres)

console.log(`Testando mês extenso:`)
objDois.getMesExtenso()

console.log(`Testando ano bissexto:`)
objUm.isBissexto()
