let Score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

updateScoreElement();

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('✊');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('🖐️');
  });

document.querySelector('.js-scissor-button')
  .addEventListener('click', () => {
    playGame('✌️');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('✊');
  } else if (event.key === 'p') {
    playGame('🖐️');
  } else if (event.key === 's') {
    playGame('✌️');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === '✌️') {
    if (computerMove === '✊') {
      result = 'You lose.';
    } else if (computerMove === '🖐️') {
      result = 'You win.';
    } else if (computerMove === '✌️') {
      result = 'Tie.';
    }

  } else if (playerMove === '🖐️') {
    if (computerMove === '✊') {
      result = 'You win.';
    } else if (computerMove === '🖐️') {
      result = 'Tie.';
    } else if (computerMove === '✌️') {
      result = 'You lose.';
    }

  } else if (playerMove === '✊') {
    if (computerMove === '✊') {
      result = 'Tie.';
    } else if (computerMove === '🖐️') {
      result = 'You lose.';
    } else if (computerMove === '✌️') {
      result = 'You win.';
    }
  }
  if (result === 'You win.') {
    Score.wins += 1;
  } else if (result === 'You lose.') {
    Score.losses += 1;
  } else if (result === 'Tie.') {
    Score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(Score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `You picked ${playerMove}. I picked ${computerMove}. ${result}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = '✊';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = '🖐️';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = '✌️';
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${Score.wins}, Losses: ${Score.losses}, Ties: ${Score.ties}`;
}
