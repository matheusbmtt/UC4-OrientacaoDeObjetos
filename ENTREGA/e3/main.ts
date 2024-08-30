import { Carro } from "./Carro"
import { Garagem } from "./Garagem"
let leitor = require('readline-sync')
let menu = true
let garagem = new Garagem()

while(menu){
    let pergunta = leitor.questionInt(`
        1 - Adicionar Carro
        2 - Verificar Garagem
        3 - Modificar Carro
        4 - Deletar Carro
        0 - Sair
        Resposta: 
    `)
    switch(pergunta){
        case 1:
            console.log(`Iniciando cadastro do Carro:`)
            let marcaCarro = leitor.question("Qual a marca do seu carro?").toUpperCase()
            let kmCarro = leitor.questionInt("Quantos kms por litro?")
            let tanqueCarro = leitor.questionInt("Quantos litros de gasolina tem em seu tanque?")

            let carroTemp = new Carro(tanqueCarro, kmCarro, marcaCarro)

            garagem.setGaragem(carroTemp)
            break
        case 2:
            console.log(`Os carros na garagem são:`)
            garagem.getGaragem()
            break
        case 3:
            garagem.modificarCarro()
            break
        case 4:
            garagem.deletarCarro()
            break
        case 0:
            console.log(`Finalizando sistema.`)
            process.exit(0)
    }
}