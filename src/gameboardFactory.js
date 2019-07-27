import {
  getCoodinates,
} from './helper';

const gameboardFactory = () => {
  const gameboard = Array.from(Array(10), () => new Array(10));

  const ships = [];

  const getShips = () => ships;

  const receiveAttack = (x, y) => {
    let result;
    if (gameboard[x][y] === undefined) {
      gameboard[x][y] = 'Miss';
      result = false;
    }
    if (typeof gameboard[x][y] === 'object') {
      const ship = gameboard[x][y];
      ship.hit([x, y]);
      gameboard[x][y] = 'Hit';
      result = true;
    }
    return result;
  };

  const isAllSunk = () => {
    const sunk = ship => ship.isSunk();
    return ships.every(sunk);
  };

  const placeShip = (ship, cods, direction = 'x') => {
    let placed = false;
    const shipcoords = [];

    const xEnd = ship.length + cods[1];
    const yEnd = ship.length + cods[0];

    if (direction === 'x' && xEnd < 10) {
      // eslint-disable-next-line no-plusplus
      for (let i = cods[1]; i < xEnd; i++) {
        if (gameboard[cods[0]][i]) {
          break;
        }
        gameboard[cods[0]][i] = ship;
        shipcoords.push([cods[0], i]);
        if (i === xEnd - 1) {
          placed = true;
          ships.push(ship);
        }
      }
    } else if (direction === 'y' && yEnd < 10) {
      // eslint-disable-next-line no-plusplus
      for (let j = cods[0]; j < yEnd; j++) {
        if (gameboard[j][cods[1]]) {
          break;
        }
        gameboard[j][cods[1]] = ship;
        shipcoords.push([j, cods[1]]);
        if (j === yEnd - 1) {
          placed = true;
          ships.push(ship);
        }
      }
    }
    if (!placed) {
      const newcords = getCoodinates();
      placeShip(ship, newcords, direction);
    }
    ship.coordinates.push(...shipcoords);
    return shipcoords;
  };

  return {
    placeShip,
    gameboard,
    receiveAttack,
    isAllSunk,
    getShips,
  };
};

export default gameboardFactory;