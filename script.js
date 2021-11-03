const box = document.querySelectorAll('.box');
const btnRestart = document.querySelector('.btnRestart');
const title = document.querySelector('.title');

const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');
const box9 = document.querySelector('#box9');

const jogadas = ['X', 'O'];
let jogador = 0;
let qtdJogadas = 0;

box.forEach(box => {
  box.addEventListener('click', function () {
    box.classList.add('pressed');

    box.textContent = jogadas[jogador];
    box.classList.add(jogadas[jogador]);

    setTimeout(function () {
      box.classList.remove('pressed')
    }, 100);

    checkGame();
  });
});

btnRestart.addEventListener('click', function () {
  box.forEach(box => {
    box.textContent = "";
    box.classList.remove("X");
    box.classList.remove("O");
    jogador = 0;
    qtdJogadas = 0;
    title.textContent = 'Clique em algum dos quadrados para começar!';
    box.disabled = false;

    document.querySelector('body').classList.remove('OWin');
    document.querySelector('body').classList.remove('XWin');
  })
});

function checkGame() {
  // Casos de vitória fechando linhas
  let winCase01 = box1.textContent === box2.textContent && box1.textContent === box3.textContent && box1.textContent !== "";
  let winCase02 = box4.textContent === box5.textContent && box4.textContent === box6.textContent && box4.textContent !== "";
  let winCase03 = box7.textContent === box8.textContent && box7.textContent === box9.textContent && box7.textContent !== "";

  // Casos de vitória fechando colunas
  let winCase04 = box1.textContent === box4.textContent && box1.textContent === box7.textContent && box1.textContent !== "";
  let winCase05 = box2.textContent === box5.textContent && box2.textContent === box8.textContent && box2.textContent !== ""; let winCase06 = box3.textContent === box6.textContent && box3.textContent === box9.textContent && box3.textContent !== "";

  // Casos de vitória fechando diagonais
  let winCase07 = box1.textContent === box5.textContent && box1.textContent === box9.textContent && box1.textContent !== "";
  let winCase08 = box3.textContent === box5.textContent && box3.textContent === box7.textContent && box3.textContent !== "";

  if (winCase01 || winCase02 || winCase03 || winCase04 || winCase05 || winCase06 || winCase07 || winCase08) {
    title.textContent = `Jogador "${jogadas[jogador]}" venceu!`;

    if (jogadas[jogador] === "X") {
      document.querySelector('body').classList.add('XWin');
    } else {
      document.querySelector('body').classList.add('OWin');
    }

    box.forEach(box => {
      box.disabled = true;
    });
  } else {
    jogador === 0 ? jogador = 1 : jogador = 0;
    title.textContent = `Vez do jogador "${jogadas[jogador]}"`
    qtdJogadas++;

    if (qtdJogadas === 9) {
      title.textContent = `Xiii, deu velha!`;

      box.forEach(box => {
        box.disabled = true;
      });
    }
  };
}