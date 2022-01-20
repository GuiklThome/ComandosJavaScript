const Pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradgmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()