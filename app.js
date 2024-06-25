alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 29;
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha o número entre 1 e 30');
    if(numeroSecreto == chute){
        console.log(`Parabés você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    }
    else {
       if(chute > numeroSecreto){
        alert(`O número secreto é menor que o ${chute}`);
       } else{
        alert(`O número secreto é maior que o ${chute}`);
       }
       tentativas++;
    }
}


