alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 10;
console.log(numeroSecreto);
let tentativas = 1;
let chute = prompt('Escolha um numero entre 1 e 30');

while (chute != numeroSecreto){
    let chute = prompt('Escolha um numero entre 1 e 30');
        if (numeroSecreto == chute){
            alert(`Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentivas`);
        }else {
            if(chute > numeroSecreto){
                alert(`O numero secreto é menor que ${chute} !`);
            }else{
                alert(`O numero secreto é maior que ${chute} !`);
            }
        }
        tentativas++;

}
