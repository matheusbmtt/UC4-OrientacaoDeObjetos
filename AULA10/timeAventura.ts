export class Mago {
  conjurarMagia(): void {
    console.log("Mago conjurando uma magia poderosa!");
  }
}

export class Guerreiro {
  atacar(): void {
    console.log("Guerreiro atacando com sua espada!");
  }
}

export class CriaturaMagica {
  usarMagia(): void {
    console.log("Criatura mágica lançando um feitiço!");
  }
}

export class TimeAventura {
  private membros: (Mago | Guerreiro | CriaturaMagica)[] = [];

  adicionarMembro(membro: Mago | Guerreiro | CriaturaMagica): void {
    this.membros.push(membro);
  }

  enfrentarDesafio(): void {
    console.log("Time de aventura se preparando para o desafio!");
    this.membros.forEach(membro => {
      if (membro instanceof Mago) {
        membro.conjurarMagia();
      } else if (membro instanceof Guerreiro) {
        membro.atacar();
      } else if (membro instanceof CriaturaMagica) {
        membro.usarMagia();
      }
    });
  }
}
