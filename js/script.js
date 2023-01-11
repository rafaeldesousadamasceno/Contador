let valorAtual = document.getElementById("display");
let valor = parseInt(valorAtual.value)

function decrementar() {
    valor--;
    valorAtual.innerText = valor;
}

function resetar() {
    valor = 0;
    valorAtual.innerText = valor;
}

function incrementar() {
    valor++;
    valorAtual.innerText = valor;
}
