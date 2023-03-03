document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'arara',
      img: 'images/arara.png'
    },
    {
      name: 'girafa',
      img: 'images/girafa.png'
    },
    {
      name: 'golfinho',
      img: 'images/golfinho.png'
    },
    {
      name: 'hipopotamo',
      img: 'images/hipopotamo.png'
    },
    {
      name: 'leao',
      img: 'images/leao.png'
    },
    {
      name: 'macaco',
      img: 'images/macaco.png'
    },
    {
      name: 'arara',
      img: 'images/arara.png'
    },
    {
      name: 'girafa',
      img: 'images/girafa.png'
    },
    {
      name: 'golfinho',
      img: 'images/golfinho.png'
    },
    {
      name: 'hipopotamo',
      img: 'images/hipopotamo.png'
    },
    {
      name: 'leao',
      img: 'images/leao.png'
    },
    {
      name: 'macaco',
      img: 'images/macaco.png'
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Você clicou na mesma imagem!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você acertou!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Desculpe, tente novamente!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = "\n" + cardsWon.length;

    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = '\nParabéns, você achou todos os animais!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
})
