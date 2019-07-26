const shipFactory = (length) => {
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
  };
};

export default shipFactory;