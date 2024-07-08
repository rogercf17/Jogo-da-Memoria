document.addEventListener('DOMContentLoaded', function () {
    const arrayCartas = [
        { nome: 'arara', imagem: 'images/arara.png' },
        { nome: 'girafa', imagem: 'images/girafa.png' },
        { nome: 'golfinho', imagem: 'images/golfinho.png' },
        { nome: 'hipopotamo', imagem: 'images/hipopotamo.png' },
        { nome: 'leao', imagem: 'images/leao.png' },
        { nome: 'macaco', imagem: 'images/macaco.png' },
        { nome: 'arara', imagem: 'images/arara.png' },
        { nome: 'girafa', imagem: 'images/girafa.png' },
        { nome: 'golfinho', imagem: 'images/golfinho.png' },
        { nome: 'hipopotamo', imagem: 'images/hipopotamo.png' },
        { nome: 'leao', imagem: 'images/leao.png' },
        { nome: 'macaco', imagem: 'images/macaco.png' }
    ];
    arrayCartas.sort(() => 0.5 - Math.random());

    const conteinerGrid = document.querySelector('.grid');
    const resultado = document.querySelector('#resultado');

    let cartasEscolhidas = [];
    let idCartasEscolhidas = [];
    let cartasAcertadas = [];

    function criarTabuleiro() {
        for (let i = 0; i < arrayCartas.length; i++) {
            const carta = document.createElement('img');
            carta.setAttribute('src', 'images/blank.png');
            carta.setAttribute('data-id', i);
            carta.addEventListener('click', viraCarta);
            conteinerGrid.appendChild(carta);
        }
    }

    function verificaAcerto() {
        const cartas = document.querySelectorAll('img');
        const idEscolha1 = idCartasEscolhidas[0];
        const idEscolha2 = idCartasEscolhidas[1];

        if (idEscolha1 == idEscolha2) {
            cartas[idEscolha1].setAttribute('src', 'images/blank.png');
            cartas[idEscolha2].setAttribute('src', 'images/blank.png');
            alert('Você clicou na mesma imagem!');
        } else if (cartasEscolhidas[0] === cartasEscolhidas[1]) {
            alert('Você acertou!');
            cartas[idEscolha1].setAttribute('src', 'images/white.png');
            cartas[idEscolha2].setAttribute('src', 'images/white.png');
            cartas[idEscolha1].removeEventListener('click', viraCarta);
            cartas[idEscolha2].removeEventListener('click', viraCarta);
            cartasAcertadas.push(cartasEscolhidas);
        } else {
            cartas[idEscolha1].setAttribute('src', 'images/blank.png');
            cartas[idEscolha2].setAttribute('src', 'images/blank.png');
            alert('Você errou, tente novamente!');
        }

        cartasEscolhidas = [];
        idCartasEscolhidas = [];

        resultado.textContent = `\n${cartasAcertadas.length}`;
        if (cartasAcertadas.length === arrayCartas.length / 2) {
            resultado.textContent = '\nParabéns, você achou todos os animais!';
        }
    }

    function viraCarta() {
        let idCarta = this.getAttribute('data-id');
        cartasEscolhidas.push(arrayCartas[idCarta].nome);
        idCartasEscolhidas.push(idCarta);
        this.setAttribute('src', arrayCartas[idCarta].imagem);
        if (cartasEscolhidas.length === 2) {
            setTimeout(verificaAcerto, 500);
        }
    }

    criarTabuleiro();
});
