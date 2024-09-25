export let rl = require("readline-sync");

export class TAREFA {
    // Construtor da classe, que inicializa a descrição, prioridade e status da tarefa
    constructor(public Descricao: string, public Prioridade: string, public Status: string) {}
}

export class FilaDeTarefas {
    // Lista interna que armazena as tarefas
    private ListaDeTarefas: TAREFA[] = [];

    // Método para adicionar uma nova tarefa no início da fila
    public add_tarefa(tarefa: TAREFA): void {
        this.ListaDeTarefas.unshift(tarefa); // Adiciona a tarefa no início da lista
        console.log(`Descrição da tarefa adicionada: ${tarefa.Descricao}`);
    }

    // Método para remover a tarefa do início da fila
    public remover_tarefa(): TAREFA | undefined {
        if (this.estaVazia()) {
            console.log("Não há tarefas!"); // Mensagem se a fila estiver vazia
            return undefined; 
        } else {
            return this.ListaDeTarefas.shift(); // Remove e retorna a primeira tarefa da lista
        }
    }

    // Método que verifica se a fila está vazia
    public estaVazia(): boolean {
        return this.ListaDeTarefas.length === 0; // Retorna true se a lista de tarefas estiver vazia
    }

    // Método para listar todas as tarefas na fila
    public listar_tarefas(): void {
        if (this.estaVazia()) {
            console.log("Nenhuma tarefa na fila"); 
            return; // Sai do método se não houver tarefas
        }

        console.log("Tarefas na fila:");
        // Itera sobre cada tarefa na lista e exibe suas informações
        this.ListaDeTarefas.forEach(tarefa => {
            console.log(`Descrição: ${tarefa.Descricao}, Prioridade: ${tarefa.Prioridade}, Status: ${tarefa.Status}`);
        });
    }

    // Método para marcar a tarefa no início da fila como concluída
    public tarefa_pronta(): void {
        if (this.estaVazia()) {
            console.log("Não há tarefas para marcar como concluídas!"); 
            return; // Sai do método se não houver tarefas
        }
        
        const tarefa = this.ListaDeTarefas[0]; // Pega a tarefa no início da fila
        tarefa.Status = "Concluída"; // Altera o status da tarefa para "Concluída"
        console.log(`Tarefa concluída: ${tarefa.Descricao}`); 
    }

    // Método para retornar o número de tarefas na fila
    public tamanhoFila(): number {
        return this.ListaDeTarefas.length; 
    }

    // Método para exibir o menu de opções para o usuário
    public exibirMenu(): void {
        console.log(`\ 
        -----------------------------------
        ------------ TAREFAS -------------
        -----------------------------------
        - 1. Adicionar Tarefa              
        - 2. Remover Tarefa      
        - 3. Listar Tarefas                       
        - 4. Ver tamanho da fila
        - 5. Tarefa Pronta 
        - 6. Sair                     
        -----------------------------------`);
    }
}

// Função principal 
function main() {
    const fila = new FilaDeTarefas(); // Cria uma nova instância da fila de tarefas
    let continuar = true; // Controlador do loop menu

    while (continuar) {
        fila.exibirMenu(); // Exibe o menu de opções
        const opcao = rl.questionInt("Escolha uma opção: "); 
        
        switch (opcao) {
            case 1:
                console.clear()
                const add_descricao = rl.question("Descricao: "); 
                const add_prioridade = rl.question("Prioridade: ");
                const add_status = rl.question("Status: "); 
                // Adiciona a nova tarefa à fila
                fila.add_tarefa(new TAREFA(add_descricao, add_prioridade, add_status));
                break;
            case 2: // Remover Tarefa
            console.clear()
                const tarefaRemovida = fila.remover_tarefa(); // Remove a tarefa do início da fila
                if (tarefaRemovida) {
                    console.log(`Tarefa removida: ${tarefaRemovida.Descricao}`); 
                }
                break;
            case 3: // Listar Tarefas
            console.clear()
                fila.listar_tarefas(); // Lista todas as tarefas na fila
                break;
            case 4: // Ver Tamanho da Fila
            console.clear()
                console.log(`Tamanho da fila: ${fila.tamanhoFila()}`); // Mostra o número de tarefas na fila
                break;
            case 5: // Marcar Tarefa como Pronta
            console.clear()
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
function pressioneEnter(){
    rl.question("PRESSIONE ENTER PARA CONTINUAR...")
}
pressioneEnter()
// Chama a função main 
main();


