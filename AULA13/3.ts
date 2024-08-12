class NumeroComplexo {
    private _real: number;
    private _imaginario: number;
  
    // Construtor que recebe valores das partes real e imaginária
    constructor(real: number, imaginario: number) {
      this._real = real;
      this._imaginario = imaginario;
    }
  
    // Métodos getter/setter para a parte real
    get real(): number {
      return this._real;
    }
  
    set real(valor: number) {
      this._real = valor;
    }
  
    // Métodos getter/setter para a parte imaginária
    get imaginario(): number {
      return this._imaginario;
    }
  
    set imaginario(valor: number) {
      this._imaginario = valor;
    }
  
    // Método para somar outro número complexo
    somar(outroComplexo: NumeroComplexo): NumeroComplexo {
      const real = this._real + outroComplexo._real;
      const imaginario = this._imaginario + outroComplexo._imaginario;
      return new NumeroComplexo(real, imaginario);
    }
  
    // Método para subtrair outro número complexo
    subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
      const real = this._real - outroComplexo._real;
      const imaginario = this._imaginario - outroComplexo._imaginario;
      return new NumeroComplexo(real, imaginario);
    }
  
    // Método para multiplicar por outro número complexo
    multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo {
      const real = this._real * outroComplexo._real - this._imaginario * outroComplexo._imaginario;
      const imaginario = this._real * outroComplexo._imaginario + this._imaginario * outroComplexo._real;
      return new NumeroComplexo(real, imaginario);
    }
  
    // Método para dividir por outro número complexo
    dividir(outroComplexo: NumeroComplexo): NumeroComplexo {
      const divisor = outroComplexo._real ** 2 + outroComplexo._imaginario ** 2;
      if (divisor === 0) {
        throw new Error("Divisão por zero não é permitida.");
      }
      const real = (this._real * outroComplexo._real + this._imaginario * outroComplexo._imaginario) / divisor;
      const imaginario = (this._imaginario * outroComplexo._real - this._real * outroComplexo._imaginario) / divisor;
      return new NumeroComplexo(real, imaginario);
    }
  
    // Método para comparar dois números complexos
    equals(outroComplexo: NumeroComplexo): boolean {
      return this._real === outroComplexo._real && this._imaginario === outroComplexo._imaginario;
    }
  
    // Método para gerar a representação em string
    toString(): string {
      const imaginarioStr = this._imaginario >= 0 ? `+ ${this._imaginario}i` : `- ${Math.abs(this._imaginario)}i`;
      return `${this._real} ${imaginarioStr}`;
    }
  
    // Método para calcular o módulo do número complexo
    modulo(): number {
      return Math.sqrt(this._real ** 2 + this._imaginario ** 2);
    }
  }
  
  // Exemplos de uso
  const z1 = new NumeroComplexo(3, 4);
  const z2 = new NumeroComplexo(1, -2);
  
  console.log("Soma:", z1.somar(z2).toString()); // 4 + 2i
  console.log("Subtração:", z1.subtrair(z2).toString()); // 2 + 6i
  console.log("Multiplicação:", z1.multiplicar(z2).toString()); // 11 - 2i
  console.log("Divisão:", z1.dividir(z2).toString()); // -1 - 2i
  console.log("Igualdade:", z1.equals(z2)); // false
  console.log("Representação:", z1.toString()); // 3 + 4i
  console.log("Módulo:", z1.modulo()); // 5