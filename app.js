document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: "cat",
      img: "images/cat.jpg"
    },
    {
      name: "cat",
      img: "images/cat.jpg"
    },
    {
      name: "diddley",
      img: "images/diddley.jpg"
    },
    {
      name: "diddley",
      img: "images/diddley.jpg"
    },
    {
      name: "homer",
      img: "images/homer.jpg"
    },
    {
      name: "homer",
      img: "images/homer.jpg"
    },
    {
      name: "lanfeust",
      img: "images/lanfeust.png"
    },
    {
      name: "lanfeust",
      img: "images/lanfeust.png"
    },
    {
      name: "rtf",
      img: "images/rtf.jpg"
    },
    {
      name: "rtf",
      img: "images/rtf.jpg"
    },
    {
      name: "samurai",
      img: "images/samurai.jpg"
    },
    {
      name: "samurai",
      img: "images/samurai.jpg"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //Create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/rainbow.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

 //Check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/b_w.png')
    cards[optionTwoId].setAttribute('src', 'images/b_w.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/rainbow.png')
    cards[optionTwoId].setAttribute('src', 'images/rainbow.png')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}



 //Flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})


