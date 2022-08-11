let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let linguagem = prompt("Qual linguagem de programação você está estudando neste momento?");

let mensagem = ("Olá " + nome + "! você tem " + idade + " anos e já está aprendendo " + linguagem + "? Parabéns!");

alert(mensagem);

let escolha = prompt("Você gostaria de se aprofundar em " + linguagem + "? Digite 1 para SIM e 2 para NÃO.");

if (escolha == 1) {
    alert("Muito bem, sugerimos que procure por usos de " + linguagem + " em sites como StackOverflow.");
} else if (escolha == 2) {
    alert("Há um mundo de linguagens que pode ser mais interessante para você, já pensou em aprender Python? Lhe desejamos boa sorte na sua jornada " + nome + "!");
} else {
    alert("Você criou o seu próprio caminho, continue assim!");
    escolha; 
}