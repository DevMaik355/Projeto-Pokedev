const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');
console.log(listaSelecaoPokedevs);

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener('click', () => {

        esconderCartaoPokedev();

        const idPokedevSelecionado = MostrarCartaoPokedev(pokedev);

       desativarCartaoPokedevNaListagem();

       ativarCartaoPokedevNaListagem(idPokedevSelecionado);

    })
})

function ativarCartaoPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add('ativo');
}

function desativarCartaoPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo');
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function MostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}
