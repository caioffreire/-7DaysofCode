let frutas = [];
let lacticinios = [];
let congelados = [];
let doces = [];
let limpeza = [];
let carnes = [];
let massas = [];
let legumes = [];
let verduras = [];
let outros = [];
let produto = "";
let categoria = "";

let adicionarItem = prompt("Boas vindas à sua lista de compras! Vamos te ajudar a organizar uma lista rapidinho! Caso queira continuar digite 'sim', caso queria finalizar, digite 'não'.");

while(adicionarItem == "sim" || adicionarItem !== "não" ){

    adicionarItem = prompt("Deseja adicionar algum item na sua lista de compras? Digite 'sim' ou 'não'.");

    while(adicionarItem != "sim" && adicionarItem != "não"){
        alert("Erro de entrada. Por favor insira sim ou não.");
        adicionarItem = prompt("Deseja adicionar mais algum item na sua lista de compras? Digite 'sim' ou 'não'.");
    }

    if(adicionarItem === "não"){
        break;
    }

    produto = prompt("Insira o produto que deseja comprar.");
    categoria = prompt("Qual a categoria para este produto? Digite 'frutas', 'lacticínios', 'congelados', 'doces', 'limpeza', 'carnes', 'massas', 'legumes', 'verduras' ou 'outros' para qualquer outra categoria.")

    if(categoria === "frutas"){
        frutas.push(produto);
    } else if (categoria === "lacticínios"){
        lacticinios.push(produto);
    } else if (categoria === "congelados"){
        congelados.push(produto);
    } else if (categoria === "doces"){
        doces.push(produto);
    } else if (categoria === "limpeza"){
        limpeza.push(produto);
    } else if (categoria === "carnes"){
        carnes.push(produto);
    } else if (categoria === "massas"){
        massas.push(produto);
    } else if (categoria === "outros"){
        outros.push(produto);
    } else if (categoria === "legumes"){
        legumes.push(produto);
    } else if (categoria === "verduras"){
        verduras.push(produto);
    } else {
        alert("Categoria inexistente.")
    }
    
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${lacticinios}\n  Congelados: ${congelados}\n  Doces: ${doces}\n  Limpeza: ${limpeza}\n  Carnes: ${carnes}\n  Massas: ${massas}\n  Legumes: ${legumes}\n  Verduras: ${verduras}\n  Outros: ${outros}`);