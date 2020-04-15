// stock les elements
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

// start the game with 0
let result = 0
// define time left
let currentTime = timeLeft.textContent

//select randomly square
function randomSquare() {
  // on retire la class dans les div
  square.forEach(className => {
    className.classList.remove('mole')
  })
  // definir random position
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}

//result
square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
    }
  })
})

// move mole
function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 650)
}

moveMole()

//countdown
function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('Game over! Your final score is ' + result)
  }
}

let timerId = setInterval(countDown, 1000)

