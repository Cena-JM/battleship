import gameboardFactory from '../src/gameboardFactory';

test('ships can be placed on board', () => {
  const newGame = gameboardFactory();
  const ship = {
    length: 4,
    hitCoords: [],
    coordinates: [],
  };
  expect(newGame.placeShip(ship, [0, 0])).toContainEqual([0, 0]);
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