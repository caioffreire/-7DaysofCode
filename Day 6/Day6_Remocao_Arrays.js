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

function mostraLista(){
    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${lacticinios}\n  Congelados: ${congelados}\n  Doces: ${doces}\n  Limpeza: ${limpeza}\n  Carnes: ${carnes}\n  Massas: ${massas}\n  Legumes: ${legumes}\n  Verduras: ${verduras}\n  Outros: ${outros}`);
}

let adicionarItem = confirm("Boas vindas à sua lista de compras! Vamos te ajudar a organizar uma lista rapidinho!");

while(adicionarItem == "sim" || adicionarItem !== "não" ){

    if(frutas.length === 0 && lacticinios.length === 0 && congelados.length === 0 && doces.length === 0 && limpeza.length === 0 && carnes.length === 0 && massas.length === 0 && legumes.length === 0 && verduras.length === 0 && outros.length === 0){
        adicionarItem = prompt("Deseja adicionar algum item na sua lista de compras? Digite 'adicionar' ou 'não'.").trim().toLocaleLowerCase();
    } else {
        adicionarItem = prompt("Deseja adicionar ou remover algum item na sua lista de compras? Digite 'adicionar', 'remover' ou 'sair'.").trim().toLocaleLowerCase();
    }

    while(adicionarItem != "adicionar" && adicionarItem != "sair" && adicionarItem != "não" && adicionarItem != "remover"){
        alert("Erro de entrada. Por favor insira 'adicionar', 'remover' ou 'sair'.");
        adicionarItem = prompt("Deseja adicionar ou remover mais algum item na sua lista de compras? Digite 'adicionar', 'remover' ou 'sair'.").trim().toLocaleLowerCase();
    }

    if(adicionarItem === "sair" || adicionarItem === "não"){
        break;
    }

    if(adicionarItem === "sim" || adicionarItem === "adicionar"){
        produto = prompt("Insira o produto que deseja comprar.").trim().toLocaleLowerCase();
        categoria = prompt("Qual a categoria para este produto? Digite 'frutas', 'lacticínios', 'congelados', 'doces', 'limpeza', 'carnes', 'massas', 'legumes', 'verduras' ou 'outros' para qualquer outra categoria.").trim().toLocaleLowerCase();

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

        mostraLista(); // mostra lista ao adicionar produto;

    } else if(adicionarItem === "remover") {

        if(frutas.length === 0 && lacticinios.length === 0 && congelados.length === 0 && doces.length === 0 && limpeza.length === 0 && carnes.length === 0 && massas.length === 0 && legumes.length === 0 && verduras.length === 0 && outros.length === 0){
            alert("A lista está vazia")
        } else {

            removerLista = prompt(`Qual produto gostaria de remover?\n\nLista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${lacticinios}\n  Congelados: ${congelados}\n  Doces: ${doces}\n  Limpeza: ${limpeza}\n  Carnes: ${carnes}\n  Massas: ${massas}\n  Legumes: ${legumes}\n  Verduras: ${verduras}\n  Outros: ${outros}`).trim().toLocaleLowerCase();
            
            if(frutas.indexOf(removerLista) != -1){
                frutas.splice(frutas.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(lacticinios.indexOf(removerLista) != -1){
                lacticinios.splice(lacticinios.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(doces.indexOf(removerLista) != -1){
                doces.splice(doces.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(limpeza.indexOf(removerLista) != -1){
                limpeza.splice(limpeza.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(carnes.indexOf(removerLista) != -1){
                carnes.splice(carnes.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(massas.indexOf(removerLista) != -1){
                massas.splice(massas.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(legumes.indexOf(removerLista) != -1){
                legumes.splice(legumes.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(verduras.indexOf(removerLista) != -1){
                verduras.splice(verduras.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else if(outros.indexOf(removerLista) != -1){
                outros.splice(outros.indexOf(removerLista), 1);
                alert(`O item ${removerLista} foi removido com sucesso!`)
            } else {
                alert("Item inexistente.")
            } 

            mostraLista(); // mostra a lista ao remover produto;
        } 
    }
}

mostraLista(); // mostra a lista ao sair
