let escolha1 = prompt(
    "Boas vindas! Por favor digite a sua carreira desejada: Back-End ou Front-End"
);

if (escolha1 == "Back-End"){
    var backEnd = prompt (
        "Back-End, interessante! Gostaria de seguir em C# ou Java?"
    );
} else if (escolha1 == "Front-End"){
    var frontEnd = prompt (
        "Front-End, interessante! Gostaria de seguir em React ou Vue?"
    );
} 

var escolha2 = prompt(
    "Você gostaria de se tornar um especialista nesta linguagem ou um Full-Stack? Digite Especialista ou Fullstack."
);

if (escolha2 == "Especialista"){
    alert(
        "A área " + escolha1 + " está precisando de profissionais especialistas no momento, continue estudando e você terá um futuro brilhante pela frente!"
    );
} else if (escolha2 == "Fullstack"){
    alert(
        "Uma área desafiadora, você precisará estudar bastante e não restarão desafios. A boa notícia: não restarão oportunidades! Continue estudando, o futuro te espera!"
    );
}

var escolha3 = prompt(
    "Existe mais alguma tecnologia que deseja se especializar ou conhecer? Digite SIM ou NÃO."
);

while (escolha3 == "SIM"){
    var futuro = prompt(
        "Digite a tecnologia que você gostaria de se especializar ou conhecer."
    );
    if (futuro == "NÃO") {
        alert("Você já tem o bastante para estudar, não desista!");
        break
    }
    alert("Muito interessante, boa sorte estudando " + futuro + "!")
}