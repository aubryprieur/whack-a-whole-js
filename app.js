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

  const grid = document.querySelector('.grid')

  //Create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/rainbow.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  createBoard()


})


