class Animal {
    constructor(nome, comprimento, patas, cor, ambiente, velocidade){
        this.nome = nome;
        this.comprimento = comprimento;
        this.patas = patas;
        this.cor = cor;
        this.ambiente = ambiente;
        this.velocidade = velocidade;
    }

    AlterarNome(nome){
        if(nome) this.nome = nome;
        
    }

    AlterarComprimento(comprimento){
        if(comprimento) this.comprimento = comprimento;
    }

    AlterarPatas(patas){
        if(patas) this.patas = patas;   
    }

    AlterarCor(cor){
        if(cor) this.cor = cor;
    }

    AlterarAmbiente(ambiente){
        if(ambiente) this.ambiente = ambiente;
    }

    AlterarVelocidade(velocidade){
        if(velocidade) this.velocidade = velocidade;
    }

    Dados(){

        let x = `
            Nome: ${this.nome}
            Comprimento: ${this.comprimento}
            Patas: ${this.patas}
            Cor: ${this.cor}
            Ambiente: ${this.ambiente}
            Velocidade: ${this.velocidade}
        `
        return x;
    }
}

class Peixe extends Animal {
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica){
        super(nome, comprimento, patas, cor, ambiente, velocidade);
        this.caracteristica = caracteristica;
    }

    AlterarCaracteristica(caracteristica){
        if(caracteristica) this.caracteristica = caracteristica;
    }

    Caracteristica(){
        let x = `Caracteristica: ${this.caracteristica}`;
        return x;
    }

    Dados(){
        let x = `
            ${super.Dados()}
            ${this.Caracteristica()}
        `
        return x;
    }
}

class Mamifero extends Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, alimento){
        super(nome, comprimento, patas, cor, ambiente, velocidade);
        this.alimento = alimento;
    }

    AlterarAlimento(alimento){
        if(alimento) this.alimento = alimento;
    }
    Alimento(){
        let x = `Alimento: ${this.alimento}`;
        return x;
    }
    Dados(){
        let x = `
            ${super.Dados()}
            ${this.Alimento()}
        `
        return x;
    }
}

let peixe = new Peixe("Peixe", 0, 0, "Cinzenta", "Mar", 0, "Barbatana");
let mamifero = new Mamifero("Urso", 0, 4, "Castanho", "Terra", 0, "mel");

let camelo = new Animal("Camelo", 150, 4, "Amarelo", "Terra", 2);
let tubarao = new Peixe("Tubarão", 300, 0, "Cinzento", "Mar", 1.5, "Barbatanas");
let urso = new Mamifero("Urso-do-Canadá", 180, 4, "Vermelho", "Terra", 0.5, "Mel")

// TESTE PEIXE E MAMIFERO 
console.log(peixe.Dados());
console.log(mamifero.Dados());

// TESTE ZOO
console.log("\n ---- ZOO ---- \n")

console.log(camelo.Dados());
console.log(tubarao.Dados());
console.log(urso.Dados());
