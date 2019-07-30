import shipFactory from './shipFactory';
import gameboardFactory from './gameboardFactory';
import player from './player';
import { displayMessage, disableCell } from './domModule';
import { selectRandom, getCoodinates, setDirection } from './helper';

const gameModule = (() => {
  const carrier1 = shipFactory(5);
  const carrier2 = shipFactory(5);
  const battleship1 = shipFactory(4);
  const battleship2 = shipFactory(4);
  const destroyer1 = shipFactory(3);
  const destroyer2 = shipFactory(3);
  const submarine1 = shipFactory(3);
  const submarine2 = shipFactory(3);
  const patrol1 = shipFactory(2);
  const patrol2 = shipFactory(2);

  const humanBoard = gameboardFactory.gameboard;
  humanBoard.placeShip(carrier1, selectRandom, setDirection);
  humanBoard.placeShip(battleship1, selectRandom, setDirection);
  humanBoard.placeShip(destroyer1, selectRandom, setDirection);
  humanBoard.placeShip(submarine1, selectRandom, setDirection);
  humanBoard.placeShip(patrol1, selectRandom, setDirection);

  const computerBoard = gameboardFactory.gameboard;
  computerBoard.placeShip(carrier2, selectRandom, setDirection);
  computerBoard.placeShip(battleship2, selectRandom, setDirection);
  computerBoard.placeShip(destroyer2, selectRandom, setDirection);
  computerBoard.placeShip(submarine2, selectRandom, setDirection);
  computerBoard.placeShip(patrol2, selectRandom, setDirection);

  const human = player('human', humanBoard, [], true);
  const computer = player('computer', computerBoard, [], false);

  const isWon = (currentPlayer) => {
    currentPlayer.gameboard.isAllSunk();
  };

  const swapTurn = (currentPlayer, opponent) => {
    currentPlayer.active = false;
    opponent.active = true;
  };

  const attack = (x, y, currentPlayer, opponent) => {
    if (!currentPlayer.active) {
      return;
    }
    const hitStatus = opponent.gameboard.receiveAttack(x, y);
    // eslint-disable-next-line no-undef
    const coord = document.querySelector(`#${opponent.name}-${x}${y}`);
    if (hitStatus) {
      coord.classList.add('hit');
      if (isWon(opponent)) {
        displayMessage(`${currentPlayer.name} has won!`);
      } else if (currentPlayer.name === 'computer' && currentPlayer.active) {
        computerPlay(currentPlayer, opponent);
      }
    } else {
      coord.classList.add('miss');
      swapTurn();
    }
    disableCell(x, y);
  };

  const computerPlay = (curr, opp) => {
    const shot = getCoodinates();
    if (curr.moves.includes(shot)) {
      computerPlay(curr, opp);
    } else {
      curr.moves.push(shot);
      attack(shot[0], shot[1], curr, opp);
    }
  };

  const gamePlay = () => {
    if (human.active) {
    //
    } else {
      computerPlay();
    }
  };
})();
