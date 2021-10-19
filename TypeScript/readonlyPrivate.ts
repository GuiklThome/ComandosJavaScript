interface Cachorro{
    nome: String
    idade: Number
    parqueFavorito?: String               ////  ? => Para definir como um parametro opsional
}

type CachorroSomenteLeitura  = { 
readonly [K in  keyof Cachorro]: Cachorro[K]
}


class MeuCachorro implements Cachorro {
     nome;
     idade;
     parqueFavorito;

    constructor(nome,idade,parque){
        this.nome = nome
        this.idade = idade
        this.parqueFavorito = parque;
    }     
}

const cao = new MeuCachorro('Doguinho' , 24 , 'Parqua do Trabalhador')