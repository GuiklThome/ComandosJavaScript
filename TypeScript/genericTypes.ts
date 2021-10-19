function adicionaApendicie<T>(Array: any[] , valor: T) {
    return Array.map(() =>  valor)
}

adicionaApendicie(['A','B','C'], 'd' )