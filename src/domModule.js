const domModule = (() => {
  const renderBoard = (owner, matrix) => {
    const parent = document.getElementById('container');
    const container = document.createElement('div');
    container.classList.add(`${owner}-board`);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const cell = document.createElement('div');
        cell.classList.add('board-cell');
        cell.setAttribute('data-index', `${owner}-${i}${j}`);
        if (owner === 'human') {
          if (typeof matrix[i][j] === 'object') {
            cell.classList.add('ship');
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

  return {
    renderBoard,
    displayMessage,
  };
})();