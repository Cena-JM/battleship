const domModule = (() => {
  const renderBoard = (parent, owner, matrix) => {
    const container = document.getElementById(`${owner.name}-board`);
    container.classList.add(`${owner.name}-board`);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const cell = document.createElement('div');
        cell.classList.add('board-cell');
        cell.setAttribute('id', `${owner.name}-${i}${j}`);
        container.appendChild(cell);
        if (owner.name === 'human') {
          if (typeof matrix[i][j] === 'object') {
            cell.classList.add('ship');
            // console.log(matrix[i][j].length);
            if (matrix[i][j].length === 5) {
              cell.classList.add('s5');
            }
            if (matrix[i][j].length === 4) {
              cell.classList.add('s4');
            }
            if (matrix[i][j].length === 3) {
              cell.classList.add('s3');
            }
            if (matrix[i][j].length === 2) {
              cell.classList.add('s2');
            }
          }
        }
      }
    }
    parent.appendChild(container);
  };

  const displayMessage = (msg) => {
    const message = document.getElementById('message');
    message.textContent = msg;
  };

  const gameOver = () => {
    const reset = document.getElementById('reset');
    const board = document.querySelector('#computer-board');
    reset.classList.remove('hidden');
    const boardCells = board.children;
    [...boardCells].forEach((cell) => {
      cell.classList.add('inactive');
    });
  };

  return {
    renderBoard,
    displayMessage,
    gameOver,
  };
})();

export default domModule;