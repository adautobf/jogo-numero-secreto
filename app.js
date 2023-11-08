let listaDeNumerosSorteados = [];
let qtdNum = 10;
let numeroSecreto;
let tentativas;

function gerarNumeroAleatorio() {    
    let numeroEscolhido = parseInt(Math.random() * qtdNum + 1);
    let qtdDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (qtdDeElementosNaLista == qtdNum){
        listaDeNumerosSorteados = [];        
    }

    // Para verificar se algum item já existe dentro do array, utilizar o método includes   
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();        
    } else {
        // Utilizar o método push para adicionar itens no array
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});    
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    limparCampo();        
}

function limparCampo() {
    document.querySelector('input').value = '';    
}

novoJogo();

function verificarChute() {
    let mensagem;
    let palavraTentativa;
    let chute = document.querySelector('input').value;
    tentativas++;
    
    if (chute == numeroSecreto){
        palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
        mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('h1', 'Acertou!');        
        exibirTextoNaTela ('p',mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        limparCampo();

        if (chute > numeroSecreto){
            exibirTextoNaTela ('p','O número secreto é menor!');
        } else {
            exibirTextoNaTela ('p','O número secreto é maior!');
        }
    }
}   
