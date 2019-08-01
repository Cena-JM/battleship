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
            // eslint-disable-next-line no-use-before-define
            addShipClasses(matrix[i][j].direction, matrix[i][j], cell, [i, j]);
          }
        }
      }
    }
    parent.appendChild(container);
  };

  const addShipClasses = (direction, obj, element, cod) => {
    if (direction === 'x') {
      let spx;
      if (cod[1] - obj.position === 0) {
        spx = 'spx-first';
      } else if (cod[1] - obj.position === obj.length - 1) {
        spx = 'spx-last';
      } else {
        spx = 'spx';
      }
      element.classList.add('ship-x', `${spx}`);
    } else {
      let spy;
      if (cod[0] - obj.position === 0) {
        spy = 'spy-first';
      } else if (cod[0] - obj.position === obj.length - 1) {
        spy = 'spy-last';
      } else {
        spy = 'spy';
      }
      element.classList.add('ship-y', `${spy}`);
    }
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

    reset.addEventListener('click', () => {
      window.location.reload();
    });
  };

  return {
    renderBoard,
    displayMessage,
    gameOver,
  };
})();

export default domModule;