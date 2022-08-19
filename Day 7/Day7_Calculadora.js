function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtrai(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function divide(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

function multiplica(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function sair() {
    alert("Até a próxima.")
}

confirm("Boas vindas! Você deverá inserir 2 valores e então escolher a operação desejada.")

let valor1 = prompt("Insira o primeiro valor.").trim();
let valor2 = prompt("Insira o segundo valor.").trim();

let valor = true

while(valor){

    let operacao = prompt("Escolha a operação desejada. Digite 'Soma', 'Subtração', 'Multiplicação', 'Divisão' ou 'Sair'.").trim().toLocaleLowerCase();

    switch(operacao) {
        case 'soma':
            valor = false;
            alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
            break;
        case 'subtração':
            valor = false;
            alert(`O resultado da ${operacao} é ${subtrai(valor1, valor2)}`);
        case 'multiplicação':
            valor = false;
            alert(`O resultado da ${operacao} é ${multiplica(valor1, valor2)}`);
            break;
        case 'divisão':
            valor = false;
            alert(`O resultado da ${operacao} é ${divide(valor1, valor2)}`);
            break;
        case 'sair':
            valor = false;
            sair();
            break;
        default:
            alert("Operação inválida");
            valor = true;
            break;
            
    }
}

sair();
