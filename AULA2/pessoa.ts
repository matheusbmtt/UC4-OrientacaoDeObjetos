class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    cumprimentar(): void{
        console.log(`Olá! Meu nome é ${this.nome}`);
    }
}

// a herança das classes filho carregam a abstração da classe pai

class Crianca extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou uma criança`); 
    }
}

class Adulto extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou um adulto.`); 
    }
}

class Idoso extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou um idoso.`); 
    }
}

let person = new Pessoa("João", 30)
let kid = new Crianca("Enzo", 7)
let adult = new Adulto("Pedro", 45)
let oldman = new Idoso("Matusalém", 80)

person.cumprimentar()
kid.cumprimentar()
adult.cumprimentar()
oldman.cumprimentar()
