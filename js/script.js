let valorAtual = document.getElementById("display");

function decrementar() {
    valorAtual.value--;
    valorAtual.innerText = valorAtual.value;
}

function resetar() {
    valorAtual.value = 0;
    valorAtual.innerText = valorAtual.value;
}

function incrementar() {
    valorAtual.value++;
    valorAtual.innerText = valorAtual.value;
}
