const shipFactory = (length) => {
  const hitCoords = [];
  const hit = (coord) => {
    hitCoords.push(coord);
  };

  const isSunk = () => hitCoords.length === length;

  return {
    length,
    hit,
    isSunk,
    hitCoords,
  };
};

export default shipFactory;