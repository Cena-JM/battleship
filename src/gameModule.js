import shipFactory from './shipFactory';
import gameboardFactory from './gameboardFactory';
import player from './player';
import { getCoodinates } from './helper';

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
  humanBoard.placeShip(carrier1);
  humanBoard.placeShip(battleship1);
  humanBoard.placeShip(destroyer1);
  humanBoard.placeShip(submarine1);
  humanBoard.placeShip(patrol1);

  const computerBoard = gameboardFactory.gameboard;
  computerBoard.placeShip(carrier2);
  computerBoard.placeShip(battleship2);
  computerBoard.placeShip(destroyer2);
  computerBoard.placeShip(submarine2);
  computerBoard.placeShip(patrol2);

  const human = player('human', gameboardFactory.gameboard, true);
  const compter = player('computer', gameboardFactory.gameboard, false);

  
})();
