function sorteio(n){
    return Math.round(Math.random() * 10);
}

let numeroSorteado = sorteio();
console.log(numeroSorteado);

let tentativas = 1;

while(tentativas <= 3){

    let chute = parseInt(prompt("Essa é a sua chance! Chute um número de 0 a 10!"));

    if(chute == numeroSorteado) {

        alert("Parabéns! Você acertou! Realmente pensei em " + numeroSorteado + "!");
        break;
    
    }else{
        alert("Você errou!")
    }

    tentativas++;
   
    }

if (tentativas = 3 || chute != numeroSorteado){
    
        alert("Fim de jogo! O número correto era " + numeroSorteado + "!")
}