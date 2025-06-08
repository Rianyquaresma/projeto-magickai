/**
O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados.
    OBJETIVO - Criar a funcionalidade de filtrar as cartas.
        PASSO 1 - Pegar o botão de "Aplicar filtros" do HTML e mandar pro JS
        PASSO 2 - Escutar  o clique no botão de "Aplicar filtros"
        PASSO 3 - Pegar os valores dos campos de categoria e preço
        PASSO 4 - Para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros selecionados pela pessoa
 */

// PASSO 1 - Pegar o botão de "Aplicar filtros" do HTML e mandar pro JS
const botaoFiltrar = document.querySelector(".btn-filtrar");

// PASSO 2 - Escutar o clique no botão de "Aplicar filtros"
botaoFiltrar.addEventListener("click", function(){
    // PASSO 3 - Pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector("#categoria").value;
    const precoMaximoSelecionado = document.querySelector("#preco").value;

    // PASSO 4 - Para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros selecionados pela pessoa
    const cartas = document.querySelectorAll(".carta");

    cartas.forEach(function(carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;
        let mostrarCarta = true;

const temFiltroDeCategoria = categoriaSelecionada !== "";

const cartaNaoBateComFiltroDeCategoria =
categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if (temFiltroDeCategoria &&
            cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== "";
        const cartaNaoBateComFiltroDePrecoMaximo =
            parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if(mostrarCarta) {
            carta.classList.add("mostrar");
            carta.classList.remove("esconder");
        } else {
            carta.classList.remove("mostrar");
            carta.classList.add("esconder");
        }
    });
});
