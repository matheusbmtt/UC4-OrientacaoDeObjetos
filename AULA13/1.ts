class Contador {
    private valorContador: number;
  
    constructor() {
      this.valorContador = 0; // Inicializa o contador com valor zero
    }
  
    // Método para zerar o contador
    zerar(): void {
      this.valorContador = 0;
    }
  
    // Método para incrementar o contador
    incrementar(): void {
      this.valorContador += 1;
    }
  
    // Método para obter o valor atual do contador
    valor(): number {
      return this.valorContador;
    }
  }
  
  // Exemplo de uso
  const meuContador = new Contador();
  console.log(meuContador.valor()); // 0
  meuContador.incrementar();
  console.log(meuContador.valor()); // 1
  meuContador.zerar();
  console.log(meuContador.valor()); // 0