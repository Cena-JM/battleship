const selectRandom = space =>  Math.floor(Math.random() * space);

const getCoodinates = () => {
    let coodinates = [selectRandom(10), selectRandom(10)];
    return coodinates
}

export {
    selectRandom,
    getCoodinates
};