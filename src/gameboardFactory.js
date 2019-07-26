import { selectRandom, getCoodinates } from "./selectRandom";
const gameboardFactory = () => {
  const gameboard = rows
  const receiveAttack = (x, y) => {}

  const placeShip = (ship) => {
    let direction = selectRandom(2) === 0 ? 'x' : 'y';
    let occupiedCoordinates = [];
    let placed = false;

    while (!placed) {
      let cods = getCoodinates()
      let xEnd = ship.size + cods[1];
      let yEnd = ship.size + cods[0];
      let shipCods = []

      if (direction === 'x' && xEnd < 10) {
        for (let i = cods[1]; i <= xEnd; i++) {
          if (occupiedCoordinates.includes([cods[0], i])) { break }
          shipCods.push([cods[0], i])
          if (i === xEnd) { placed = true }
        }
      } else if (direction === 'y' && yEnd < 10) {
        for (let j = cods[0]; j <= yEnd; j++) {
          if (occupiedCoordinates.includes(j, cods[1])) { break }
          shipCods.push([j, cods[1]])
          if (j === yEnd) { placed = true }
        }
      }
    }
    return {
        direction,
        placed,
        shipCods
    }
  }
}

export default gameboardFactory;