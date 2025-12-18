class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Testes
const heroi1 = new Heroi("Lucas", 21, "mago");
const heroi2 = new Heroi("Ana", 25, "guerreiro");
const heroi3 = new Heroi("João", 30, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
