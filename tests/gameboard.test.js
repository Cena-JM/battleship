import { gameboardFactory } from "../src/gameboardFactory";

let ship = {size: 6}
// let shipCods = gameboardFactory();
// shipCods.placeShip(ship);
test('Game board correctly placed ship', () => {
  expect(gameboardFactory.placeShip(ship)).toBe(true);
});