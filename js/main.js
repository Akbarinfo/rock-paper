const elPaper = document.querySelector('.rock__btnf.rock__btn');
const elScissors = document.getElementById('scissors');
let yourScore = document.querySelector('#your')
const playBtn = document.querySelector('#play')
const elRock = document.getElementById('rock');
let pcScore = document.querySelector('#pc')
const ul1 = document.querySelector('#ul1')
const ul2 = document.querySelector('#ul2')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')

function choice () {
  return Math.floor(Math.random() * 3 + 1)
}

// play button bosilganda kimdir yutdimi deb tekshiradigan function
function isFinish() {
  // durrang bo'lganini tekshiradi
  if(+yourScore.textContent  == +pcScore.textContent && yourScore.textContent == 5 ) {
    alert('Draw')
    yourScore.textContent = 0
    pcScore.textContent = 0
  }
  // agar durrang bumasa kimdir yutganini tekshiradi
  else if(+yourScore.textContent >= 5 || +pcScore.textContent >= 5) {
    +yourScore.textContent == 5 ? alert('You win') : alert('You lose');
    yourScore.textContent = 0
    pcScore.textContent = 0
  }
}

// qog'oz bosilganida ishlaydi
elPaper.addEventListener('click', () => {
  // 1-li ni none qilindi
  ul1.style.display = 'none'
  // 2-li ochiladi
  ul2.style.display = 'block'
  // birdaniga img ni src ni o'zgartirdim
  img1.src = "../img/five.svg"

  // tanlov
  let a = choice();

  // tanlovga ko'ra img2 ni src o'zgaradi
  if(elPaper.value == a) {
    playBtn.textContent = 'Draw'
    img2.src = "../img/five.svg"
    yourScore.textContent = +yourScore.textContent + 1
    pcScore.textContent = +pcScore.textContent + 1
  } else if(a == 2 ) {
    img2.src = "../img/two.svg"
    pcScore.textContent = +pcScore.textContent + 1
    playBtn.textContent = 'You lose'

  } else {
    img2.src = "../img/nul.svg"
    yourScore.textContent = +yourScore.textContent + 1
    playBtn.textContent = 'You win'
  }

  if(yourScore.textContent == 5) {
    alert('You win')
    yourScore.textContent = 0
  }
});

// qaychi bosilganida ishlaydi
elScissors.addEventListener('click', () => {
  ul1.style.display = 'none'
  ul2.style.display = 'block'
  img2.src = "../img/two.svg"
  let a = choice();

  if(elScissors.value == a) {
    playBtn.textContent = 'Draw'
    img1.src = "../img/two.svg"
    yourScore.textContent = +yourScore.textContent + 1
    pcScore.textContent = +pcScore.textContent + 1
  } else if(a == 1) {
    img1.src = "../img/five.svg"
    yourScore.textContent = +yourScore.textContent + 1
    playBtn.textContent = 'You win'

  } else {
    img1.src = "../img/nul.svg"
    pcScore.textContent = +pcScore.textContent + 1
    playBtn.textContent = 'You lose'
  }
});

// rock bosilganida ishlaydigan function
elRock.addEventListener('click', () => {
  ul1.style.display = 'none'
  ul2.style.display = 'block'
  img1.src = "../img/nul.svg"
  let a = choice();

  if(elRock.value == a) {
    playBtn.textContent = 'Draw'
    img2.src = "../img/nul.svg"
    yourScore.textContent = +yourScore.textContent + 1
    pcScore.textContent = +pcScore.textContent + 1
  } else if(a == 1) {
    img2.src = "../img/five.svg"
    pcScore.textContent = +pcScore.textContent + 1
    playBtn.textContent = 'You lose'

  } else {
    img2.src = "../img/two.svg"
    yourScore.textContent = +yourScore.textContent + 1
    playBtn.textContent = 'You win'
  }
});

// play button bosilganida ishlaydigan function
playBtn.onclick = function() {
  // kimdir yutganini tekshirish
  isFinish()
  playBtn.textContent = 'Play'
  // 1-li ochiladi
  ul1.style.display = 'block'
  // 2-li yashiriladi
  ul2.style.display = 'none'
}