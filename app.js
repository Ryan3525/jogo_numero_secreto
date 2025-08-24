alert("Boas Vindas ao jogo do número screto");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//emquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`escolha número entre um 1 e ${numeroMaximo}`);
    // se o chute for certo
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que  ${chute}`);
        } else {
            alert(`O numéro secreto é maior que ${chute}`);
        }
        tentativas++;
    }     
}
// Uma forma para conseguirmos uma forma mais simples para o if e else, dessa forma fica algo mais pratico e simples
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Boa! Você acertou, o numero secreto é ${numeroSecreto} você conseguiu com ${tentativas} ${palavraTentativa}.`);
