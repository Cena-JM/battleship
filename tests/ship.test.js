import shipFactory from '../src/shipFactory';

test('ship can get hit', () => {
  const ship = shipFactory(5);
  ship.hit(0);
  expect(ship.hitCoords).not.toBe(0);
});

test('ship can be sunk', () => {
  const ship = shipFactory(1);
  ship.hit(0);
  expect(ship.isSunk()).toBeTruthy();
});

test('ship will not automatically be sunk when hit', () => {
  const ship = shipFactory(3);
  ship.hit(0);
  expect(ship.isSunk()).toBeFalsy();
});