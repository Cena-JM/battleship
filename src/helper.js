const selectRandom = space => Math.floor(Math.random() * space);

const getCoodinates = () => {
  const coodinates = [selectRandom(10), selectRandom(10)];
  return coodinates;
};

const setDirection = () => {
  const dir = selectRandom(2) === 0 ? 'x' : 'y';
  return dir;
};

export {
  selectRandom,
  getCoodinates,
  setDirection,
};
