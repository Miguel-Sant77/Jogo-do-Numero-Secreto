let listaDeNumerosSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

}

exibirMensagemInicial();




function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo();
        }
}


function gerarNumeroAleatorio(){
    let numerooEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numerooEscolhido)){
        return gerarNumeroAleatorio();


    }else {
        listaDeNumerosSorteados.push(numerooEscolhido);
        console.log(listaDeNumerosSorteados);
        return numerooEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

