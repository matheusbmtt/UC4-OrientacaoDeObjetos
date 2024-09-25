"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeTarefas = exports.TAREFA = exports.rl = void 0;
exports.rl = require("readline-sync");
var TAREFA = /** @class */ (function () {
    // Construtor da classe, que inicializa a descrição, prioridade e status da tarefa
    function TAREFA(Descricao, Prioridade, Status) {
        this.Descricao = Descricao;
        this.Prioridade = Prioridade;
        this.Status = Status;
    }
    return TAREFA;
}());
exports.TAREFA = TAREFA;
var FilaDeTarefas = /** @class */ (function () {
    function FilaDeTarefas() {
        // Lista interna que armazena as tarefas
        this.ListaDeTarefas = [];
    }
    // Método para adicionar uma nova tarefa no início da fila
    FilaDeTarefas.prototype.add_tarefa = function (tarefa) {
        this.ListaDeTarefas.unshift(tarefa); // Adiciona a tarefa no início da lista
        console.log("Descri\u00E7\u00E3o da tarefa adicionada: ".concat(tarefa.Descricao));
    };
    // Método para remover a tarefa do início da fila
    FilaDeTarefas.prototype.remover_tarefa = function () {
        if (this.estaVazia()) {
            console.log("Não há tarefas!"); // Mensagem se a fila estiver vazia
            return undefined;
        }
        else {
            return this.ListaDeTarefas.shift(); // Remove e retorna a primeira tarefa da lista
        }
    };
    // Método que verifica se a fila está vazia
    FilaDeTarefas.prototype.estaVazia = function () {
        return this.ListaDeTarefas.length === 0; // Retorna true se a lista de tarefas estiver vazia
    };
    // Método para listar todas as tarefas na fila
    FilaDeTarefas.prototype.listar_tarefas = function () {
        if (this.estaVazia()) {
            console.log("Nenhuma tarefa na fila");
            return; // Sai do método se não houver tarefas
        }
        console.log("Tarefas na fila:");
        // Itera sobre cada tarefa na lista e exibe suas informações
        this.ListaDeTarefas.forEach(function (tarefa) {
            console.log("Descri\u00E7\u00E3o: ".concat(tarefa.Descricao, ", Prioridade: ").concat(tarefa.Prioridade, ", Status: ").concat(tarefa.Status));
        });
    };
    // Método para marcar a tarefa no início da fila como concluída
    FilaDeTarefas.prototype.tarefa_pronta = function () {
        if (this.estaVazia()) {
            console.log("Não há tarefas para marcar como concluídas!");
            return; // Sai do método se não houver tarefas
        }
        var tarefa = this.ListaDeTarefas[0]; // Pega a tarefa no início da fila
        tarefa.Status = "Concluída"; // Altera o status da tarefa para "Concluída"
        console.log("Tarefa conclu\u00EDda: ".concat(tarefa.Descricao));
    };
    // Método para retornar o número de tarefas na fila
    FilaDeTarefas.prototype.tamanhoFila = function () {
        return this.ListaDeTarefas.length;
    };
    // Método para exibir o menu de opções para o usuário
    FilaDeTarefas.prototype.exibirMenu = function () {
        console.log(" \n        -----------------------------------\n        ------------ TAREFAS -------------\n        -----------------------------------\n        - 1. Adicionar Tarefa              \n        - 2. Remover Tarefa      \n        - 3. Listar Tarefas                       \n        - 4. Ver tamanho da fila\n        - 5. Tarefa Pronta \n        - 6. Sair                     \n        -----------------------------------");
    };
    return FilaDeTarefas;
}());
exports.FilaDeTarefas = FilaDeTarefas;
// Função principal 
function main() {
    var fila = new FilaDeTarefas(); // Cria uma nova instância da fila de tarefas
    var continuar = true; // Controlador do loop menu
    while (continuar) {
        fila.exibirMenu(); // Exibe o menu de opções
        var opcao = exports.rl.questionInt("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                console.clear();
                var add_descricao = exports.rl.question("Descricao: ");
                var add_prioridade = exports.rl.question("Prioridade: ");
                var add_status = exports.rl.question("Status: ");
                // Adiciona a nova tarefa à fila
                fila.add_tarefa(new TAREFA(add_descricao, add_prioridade, add_status));
                break;
            case 2: // Remover Tarefa
                console.clear();
                var tarefaRemovida = fila.remover_tarefa(); // Remove a tarefa do início da fila
                if (tarefaRemovida) {
                    console.log("Tarefa removida: ".concat(tarefaRemovida.Descricao));
                }
                break;
            case 3: // Listar Tarefas
                console.clear();
                fila.listar_tarefas(); // Lista todas as tarefas na fila
                break;
            case 4: // Ver Tamanho da Fila
                console.clear();
                console.log("Tamanho da fila: ".concat(fila.tamanhoFila())); // Mostra o número de tarefas na fila
                break;
            case 5: // Marcar Tarefa como Pronta
                console.clear();
                fila.tarefa_pronta(); // Marca a primeira tarefa como concluída
                break;
            case 6:
                continuar = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Opcao invalida! Tente novamente.");
                break;
        }
    }
}
function pressioneEnter() {
    exports.rl.question("PRESSIONE ENTER PARA CONTINUAR...");
}
pressioneEnter();
// Chama a função main 
main();
