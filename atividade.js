function exibirOlaMundo(){
    console.log('Olá, mundo!');
}

function exibirNome(nome) {    
    console.log(`Olá ${nome}!`);
}

function retornarDobro(numero) {
     return numero * 2;    
}

function retornarMedia(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

function retornarOMaior(num1, num2){
    if (num2 > num1) {
        return num2;
    } else {
        return num1;
    }
}

function retornarMultiplicacao(numero){
    return numero * numero;    
}

exibirOlaMundo();

exibirNome('Adauto Barbosa Filho');

console.log(retornarDobro(4));

console.log(retornarMedia(2,4,6));

console.log(retornarOMaior(6,10));

console.log(retornarMultiplicacao(4));
