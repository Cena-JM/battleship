import gameboardFactory from '../src/gameboardFactory';

test('ships can be placed on board', () => {
  const newGame = gameboardFactory();
  const ship = {
    length: 4,
    hitCoords: [],
    coordinates: [],
  };
  expect(newGame.placeShip(ship, [0, 0])).toContainEqual([0, 0]);
  let j = 0;
  while (j < 4) {
    const i = 0;
    expect(typeof newGame.gameboard[i][j]).toBe('object');
    j += 1;
  }
});

test('Game board correctly placed ship', () => {
  const newGame = gameboardFactory();
  const ship = {
    length: 3,
    hitCoords: [],
    coordinates: [],
  };
  newGame.placeShip(ship, [0, 0]);
  expect(newGame.gameboard[0][0]).toMatchObject(ship);
});

test('ships can\'t be placed out of bounds', () => {
  const newGame = gameboardFactory();
  const ship = {
    length: 4,
    hitCoords: [],
    coordinates: [],
  };

  expect(newGame.placeShip(ship, [0, 7], 'x')).not.toContainEqual([0, 7]);
});

test('ships can\'t overlap on the board and both ships are on the board', () => {
  const newGame = gameboardFactory();
  const shipOne = {
    length: 4,
    hitCoords: [],
    coordinates: [],
  };

  const shipTwo = {
    length: 5,
    hitCoords: [],
    coordinates: [],
  };

  newGame.placeShip(shipOne, [0, 0], 'x');
  newGame.placeShip(shipTwo, [0, 2], 'x');

  expect(newGame.gameboard[0][2]).toMatchObject(shipOne);
  expect(shipTwo.coordinates[shipTwo.coordinates.length - 1][0]).toBeLessThan(10);
  expect(shipTwo.coordinates[shipTwo.coordinates.length - 1][1]).toBeLessThan(10);
});

test('attack should miss if no ship in coordinate', () => {
  const newGame = gameboardFactory();
  expect(newGame.receiveAttack(0, 0)).toBeFalsy;
});

test('attack should hit ship', () => {
  const newGame = gameboardFactory();
  const ship = {
    length: 4,
    hitCoords: [],
    coordinates: [],
    hit: jest.fn(),
  };
  newGame.placeShip(ship, [0, 0]);
  expect(newGame.receiveAttack(0, 0)).toBe(true);
  expect(ship.hit).toHaveBeenCalled();
  expect(newGame.gameboard[0][0]).toMatch('Hit');
});