var sum = (a, b ) => a + b;

console.log(sum(15,5))  


function multiplicacao(a,b){
    return a * b;
}

console.log(multiplicacao(5,10));

function soma(...arg){
    return arg.reduce((var1 , var2) => var1 + var2 , 0);
}

console.log(soma(5,7,9,7,8,3,10,24));


console.log(" \n Veja o Progesso \n")

const str = 'Digital Innovation One'
    
function logoArgs(...args){
    console.log(args);
}

logoArgs(...str);

