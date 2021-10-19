interface Ianimal {
    nome : String 
    tipo: 'terrestre ' | 'aquatico',
    domestico : boolean
}

interface Ifelinos extends Ianimal {
    visaoNoturna : boolean
}


interface ICao extends Ianimal {
    tamanhoDoCao : 'Pequeno' | 'Médio' | 'Grande'
}

type IDomenstico = Ifelinos | ICao

const animal : Ianimal = {
    nome: 'Elefante ',
    tipo: "terrestre ",
    domestico : false
    
}

const felinos : Ifelinos = {
    nome: 'Gato',
    tipo: "terrestre ",
    domestico : true,
    visaoNoturna : true
}

const animalDotipo: IDomenstico = {
    nome: 'Cachorro',
    tipo: "terrestre ",
    domestico: true,
    tamanhoDoCao: "Médio"
}

console.log(animalDotipo)