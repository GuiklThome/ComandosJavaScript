function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('Vou sempre executar')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)