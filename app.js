alert('Boas Vindas ao jogo do numero secreto!');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

console.log(numeroSecreto)
// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);


//enquanto chute n for igual ao numero segreto
while (chute != numeroSecreto) {
    chute =  prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    // se o chute for igual que o numero secreto
    if (numeroSecreto == chute) {
        break;
    } else {

        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else{
        alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    
}
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
