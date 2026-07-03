const div = document.querySelectorAll('.xo>div')
let user1 = 'X'
let user2 = 'O'
let move = ''
// end select sectiopn//

// modal helpers (replaces native alert, which some previews block)//
const overlay = document.getElementById('overlay')
const modalSymbol = document.getElementById('modalSymbol')
const modalTitle = document.getElementById('modalTitle')
const modalSub = document.getElementById('modalSub')
const modalBtn = document.getElementById('modalBtn')

function showModal(symbol, title, sub, btnText, onClose) {
  modalSymbol.innerText = symbol
  modalTitle.innerText = title
  modalSub.innerText = sub
  modalBtn.innerText = btnText
  overlay.classList.add('show')
  modalBtn.onclick = () => {
    overlay.classList.remove('show')
    if (onClose) onClose()
  }
}
// modal helpers//

// turn section//
let turn = parseInt(Math.random() * 2)

if (turn) {
  showModal('X', 'Player X starts', 'Get ready, first move is theirs', "Let's play")
  move = 'X'
} else {
  showModal('O', 'Player O starts', 'Get ready, first move is theirs', "Let's play")
  move = 'O'
}
console.log(move);

// turn section//

// fill out these divs//
div.forEach((val) => {
  val.addEventListener('click', () => {
    if (val.innerText == '') {
      val.innerText = move
    } else {
      console.log('click nakooooooon!');

    }
    //////////////////////////////////
    if (move == 'X') {
      move = 'O'
    } else {
      move = 'X'
    }
    checkWinner()
  })
})
// fill out these divs//

function checkWinner() {
  // select user winner//
  let winner = ''
  switch (true) {
    case (div[0].innerText == div[1].innerText && div[0].innerText == div[2].innerText) && (div[0].innerText != ''): winner = div[0].innerText; break;
    case (div[3].innerText == div[4].innerText && div[3].innerText == div[5].innerText) && (div[3].innerText != ''): winner = div[3].innerText; break;
    case (div[6].innerText == div[7].innerText && div[6].innerText == div[8].innerText) && (div[6].innerText != ''): winner = div[6].innerText; break;
    case (div[0].innerText == div[3].innerText && div[0].innerText == div[6].innerText) && (div[0].innerText != ''): winner = div[0].innerText; break;
    case (div[1].innerText == div[4].innerText && div[1].innerText == div[7].innerText) && (div[1].innerText != ''): winner = div[1].innerText; break;
    case (div[2].innerText == div[5].innerText && div[2].innerText == div[8].innerText) && (div[2].innerText != ''): winner = div[2].innerText; break;
    case (div[0].innerText == div[4].innerText && div[0].innerText == div[8].innerText) && (div[0].innerText != ''): winner = div[0].innerText; break;
    case (div[2].innerText == div[4].innerText && div[2].innerText == div[6].innerText) && (div[2].innerText != ''): winner = div[2].innerText; break;
  }
  console.log('winner : ', winner);

  if (winner == 'X') {
    showModal('X', 'Player X wins! 🎉', 'A new game starts shortly', 'Play again', () => location.reload())
    setTimeout(() => {
      location.reload()
    }, 2200);
  } else if (winner == "O") {
    showModal('O', 'Player O wins! 🎉', 'A new game starts shortly', 'Play again', () => location.reload())
    setTimeout(() => {
      location.reload()
    }, 2200);
  }
  // select user winner//
}