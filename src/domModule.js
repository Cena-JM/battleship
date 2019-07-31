const domModule = (() => {
  const renderBoard = (parent, owner, matrix) => {
    const container = document.createElement('div');
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

export default domModule;