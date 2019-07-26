import { selectRandom, getCoodinates } from './selectRandom';

let occupiedCoordinates = [];

const gameboardFactory = () => {
  const gameboard = Array.from(Array(10), () => new Array(10));

  const receiveAttack = (x, y) => {

  };

  const placeShip = (ship) => {
    const direction = selectRandom(2) === 0 ? 'x' : 'y';
    let placed = false;
    let shipCods = [];

    while (!placed) {
      const cods = getCoodinates();
      const xEnd = ship.length + cods[1];
      const yEnd = ship.length + cods[0];
      shipCods = [];

      if (direction === 'x' && xEnd < 10) {
        // eslint-disable-next-line no-plusplus
        for (let i = cods[1]; i <= xEnd; i++) {
          if (occupiedCoordinates.includes([cods[0], i])) { break; }
          shipCods.push([cods[0], i]);
          if (i === xEnd) { placed = true; }
        }
      } else if (direction === 'y' && yEnd < 10) {
        // eslint-disable-next-line no-plusplus
        for (let j = cods[0]; j <= yEnd; j++) {
          if (occupiedCoordinates.includes(j, cods[1])) { break; }
          shipCods.push([j, cods[1]]);
          if (j === yEnd) { placed = true; }
        }
      }
    }
    occupiedCoordinates = occupiedCoordinates.push(...shipCods);
    return shipCods;
  };
};

export default gameboardFactory;
