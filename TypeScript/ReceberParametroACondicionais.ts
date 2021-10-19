interface IUsuario {
    nome:  String
    email: String
}

interface IAdm extends IUsuario {
    cargo: 'Gerente' | 'Cordenador' | 'supervisor'
}

function Vericar(usuario: IUsuario | IAdm) {
     if('cargo' in usuario){
         //redireciona Para area de administração
     }
     //redireciona para a area de Usuario
}