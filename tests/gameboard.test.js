import { gameboardFactory } from "../src/gameboardFactory";
import { shipFactory } from "../src/shipFactory";

const ships = { 
    carrier : shipFactory(5),
    battleship : shipFactory(4),
    destroyer : shipFactory(3),
    submarine : shipFactory(3),
    patrol : shipFactory(2)
}