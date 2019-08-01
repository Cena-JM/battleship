import shipFactory from './shipFactory';
import gameboardFactory from './gameboardFactory';
import player from './player';
import domModule from './domModule';
import {
  selectRandom,
  getCoodinates,
  setDirection
} from './helper';

const gameModule = (() => {
  const isWon = (player) => {
    let result;
    if (player.board.isAllSunk()) {
      player.active = false;
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  const swapTurn = (attacker, opponent) => {
    attacker.active = false;
    opponent.active = true;
  };

  const computerPlay = (curr, opp) => {
    const shot = getCoodinates();
    const st = shot.join('').toString();
    if (curr.name !== 'computer') {
      return;
    }
    if (curr.moves.includes(st)) {
      computerPlay(curr, opp);
    } else {
      curr.moves.push(st);
      attack(shot[0], shot[1], curr, opp);
    }
  };

  const attack = (x, y, currentPlayer, opponent) => {
    if (!currentPlayer.active) {
      return;
    }
    const hitStatus = opponent.board.receiveAttack(x, y);
    // eslint-disable-next-line no-undef
    const coord = document.querySelector(`#${opponent.name}-${x}${y}`);
    if (hitStatus) {
      coord.classList.add('hit');
      x += 1;
      if (isWon(opponent)) {
        domModule.displayMessage(`${currentPlayer.name} has won!`);
        domModule.gameOver();
        return;
      }
      if (currentPlayer.name === 'computer' && currentPlayer.active) {
        computerPlay(currentPlayer, opponent);
      }
    } else {
      coord.classList.add('miss');
      swapTurn(currentPlayer, opponent);
    }
    if (currentPlayer.name === 'human' && !currentPlayer.active) {
      computerPlay(opponent, currentPlayer);
    }
  };

  const gamePlay = () => {

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

    const humanBoard = gameboardFactory();
    humanBoard.placeShip(carrier1, selectRandom(), setDirection());
    humanBoard.placeShip(battleship1, selectRandom(), setDirection());
    humanBoard.placeShip(destroyer1, selectRandom(), setDirection());
    humanBoard.placeShip(submarine1, selectRandom(), setDirection());
    humanBoard.placeShip(patrol1, selectRandom(), setDirection());

    const computerBoard = gameboardFactory();
    computerBoard.placeShip(carrier2, selectRandom(), setDirection());
    computerBoard.placeShip(battleship2, selectRandom(), setDirection());
    computerBoard.placeShip(destroyer2, selectRandom(), setDirection());
    computerBoard.placeShip(submarine2, selectRandom(), setDirection());
    computerBoard.placeShip(patrol2, selectRandom(), setDirection());

    const human = player('human', humanBoard, null, true);
    const computer = player('computer', computerBoard, [], false);
    const parent = document.getElementById('container');

    domModule.renderBoard(parent, human, human.board.gameboard);
    domModule.renderBoard(parent, computer, computer.board.gameboard);

    const chooseCell = (e) => {
      const cell = e.target.id;
      const xy = cell.substring(cell.length - 2, cell.length);
      const coord = xy.split('');
      const row = parseInt(coord[0], 10);
      const col = parseInt(coord[1], 10);
      attack(row, col, human, computer);
    };

    if (human.active) {
      const compBoard = document.querySelector('.computer-board');
      const computerCells = compBoard.children;
      [...computerCells].forEach((cell) => {
        cell.addEventListener('click', chooseCell, {
          once: true,
        });
      });
    }
  };

  return {
    gamePlay,
  };
})();

export default gameModule;