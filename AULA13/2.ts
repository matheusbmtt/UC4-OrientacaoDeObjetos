class Ponto2D {
    private _x: number;
    private _y: number;
  
    // Construtor padrão (sem parâmetros)
    constructor();
    
    // Construtor com dois parâmetros x e y
    constructor(x: number, y: number);
    
    // Construtor que aceita outro objeto do tipo Ponto2D
    constructor(ponto: Ponto2D);
    
    constructor(xOrPonto?: number | Ponto2D, y?: number) {
      if (xOrPonto instanceof Ponto2D) {
        // Construtor com outro objeto Ponto2D
        this._x = xOrPonto._x;
        this._y = xOrPonto._y;
      } else if (typeof xOrPonto === 'number' && y !== undefined) {
        // Construtor com coordenadas x e y
        this._x = xOrPonto;
        this._y = y;
      } else {
        // Construtor padrão (sem parâmetros)
        this._x = 0;
        this._y = 0;
      }
    }
  
    // Métodos de acesso (getter/setter) para x
    get x(): number {
      return this._x;
    }
  
    set x(valor: number) {
      this._x = valor;
    }
  
    // Métodos de acesso (getter/setter) para y
    get y(): number {
      return this._y;
    }
  
    set y(valor: number) {
      this._y = valor;
    }
  
    // Métodos sobrecarregados para movimentação do ponto
    mover(dx: number, dy: number): void;
    mover(ponto: Ponto2D): void;
    mover(dxOrPonto: number | Ponto2D, dy?: number): void {
      if (dxOrPonto instanceof Ponto2D) {
        // Movimentar pelo vetor do ponto fornecido
        this._x += dxOrPonto._x;
        this._y += dxOrPonto._y;
      } else if (dy !== undefined) {
        // Movimentar pelo delta x e delta y
        this._x += dxOrPonto;
        this._y += dy;
      }
    }
  
    // Método para comparação semântica dos pontos
    equals(outroPonto: Ponto2D): boolean {
      return this._x === outroPonto._x && this._y === outroPonto._y;
    }
  
    // Método para representação do objeto como string
    toString(): string {
      return `Ponto2D(x: ${this._x}, y: ${this._y})`;
    }
  
    // Método para calcular a distância até outro ponto
    distancia(outroPonto: Ponto2D): number {
      const dx = this._x - outroPonto._x;
      const dy = this._y - outroPonto._y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    // Método para criar e retornar uma cópia do ponto
    clone(): Ponto2D {
      return new Ponto2D(this._x, this._y);
    }
  }
  
  // Exemplos de uso
  const ponto1 = new Ponto2D();
  const ponto2 = new Ponto2D(3, 4);
  const ponto3 = new Ponto2D(ponto2);
  
  console.log(ponto1.toString()); // Ponto2D(x: 0, y: 0)
  console.log(ponto2.toString()); // Ponto2D(x: 3, y: 4)
  console.log(ponto3.toString()); // Ponto2D(x: 3, y: 4)
  
  console.log(ponto1.distancia(ponto2)); // 5
  console.log(ponto1.equals(ponto2)); // false
  
  ponto1.mover(1, 2);
  console.log(ponto1.toString()); // Ponto2D(x: 1, y: 2)
  
  ponto1.mover(ponto2);
  console.log(ponto1.toString()); // Ponto2D(x: 4, y: 6)
  
  const ponto4 = ponto1.clone();
  console.log(ponto4.toString()); // Ponto2D(x: 4, y: 6)