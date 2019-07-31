const shipFactory = (length) => {
  const direction = '';
  const position = '';
  const coordinates = [];
  const hitCoords = [];
  const hit = (coord) => {
    hitCoords.push(coord);
  };

  const isSunk = () => hitCoords.length === length;

  return {
    coordinates,
    length,
    hit,
    isSunk,
    hitCoords,
    direction,
    position,
  };
};

export default shipFactory;
