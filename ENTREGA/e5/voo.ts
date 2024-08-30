import { Data } from "./Data";



export interface Voo {
    
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): Data;
    clone(): Voo;
}


export class Voo implements Voo {
    private numeroVoo: string;
    private cadeiras: number[];
    private data: Data;
    

    constructor(numeroVoo: string, data: Data) {
        this.numeroVoo = numeroVoo
        this.cadeiras = []
        this.data = data
       
    }

    public proximoLivre(): number {
        let assentoLivre: number = -1 
        if (this.cadeiras.length === 0) {
            console.log(`O assento 1 é o próximo livre.`)

            return 1
        }
        for(let i = 1; i <= 99; i++) {
            if (this.cadeiras[i] - 1 !== i ) {
                
                assentoLivre = i + 1
                console.log(`O assento ${assentoLivre} é o próximo livre.`)
                break
            }
        }
        return assentoLivre;
    }
    
    public verifica(cadeira: number): boolean {
        if(this.cadeiras.indexOf(cadeira) === -1) { 
            console.log("A cadeira ", cadeira, "está livre")
            return true
        } else {
            console.log("A cadeira ", cadeira, "está ocupada")
            return false
        }
    }
    
    public ocupa(cadeira: number): boolean {
        if (this.cadeiras.length < 101) {
            if (this.verifica(cadeira)) {
                this.cadeiras.push(cadeira)
                this.cadeiras.sort()
                console.log(cadeira + " foi escolhida")
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }    
    
    public vagas(): number {
        let tmp = 100 - this.cadeiras.length
        if (tmp > 1) {
            console.log("Existem", tmp, "vagas")
            return tmp
        }
        return -1
    }
    public getVoo(): string {
        return this.numeroVoo
    }
    public getData(): Data {
        return this.data;
    }
    public clone(): Voo {
        return new Voo(this.numeroVoo, this.data)
    }
}