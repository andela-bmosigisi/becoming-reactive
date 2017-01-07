import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

class Game extends Component {
  constructor() {
    super();
    this.dimensions = 50;
    let cells = this.generateEmptyCells();

    this.state = {
      cells: cells
    };
  }

  startSimulation() {
    this.intervalId = setInterval(
      () => {
        this.refreshCellState()
      }, 200
    );
  }

  resetSimulation() {
    clearInterval(this.intervalId);
    let cells = this.generateEmptyCells();
    this.setState({
      cells: cells
    });
  }

  refreshCellState() {
    let newCells = this.cloneCells();

    for (let i = 0; i < this.dimensions; i++) {
      for (let j = 0; j < this.dimensions; j++) {
        // check each cell as per game of life rules.
        let neighbourCount = this.getCellNeighbourCount(i, j);
        if (neighbourCount < 2 && this.state.cells[i][j]) {
          newCells[i][j] = 0;
        } else if ((neighbourCount === 2 || neighbourCount === 3)
            && this.state.cells[i][j]) {
          newCells[i][j] = 1;
        } else if (this.state.cells[i][j] && neighbourCount > 3) {
          newCells[i][j] = 0;
        } else if (this.state.cells[i][j] === 0 && neighbourCount === 3) {
          newCells[i][j] = 1;
        }
      }
    }

    this.setState({
      cells: newCells
    });
  }

  getCellNeighbourCount(i, j) {
    let count = 0;
    for (let m = i - 1; m < i + 2; m++) {
      for (let n = j - 1; n < j + 2; n++) {
        if (m === i && n === j) {
          continue;
        }
        if (this.state.cells[m] && this.state.cells[m][n]) {
          count++;
        }
      }
    }

    return count;
  }

  generateEmptyCells() {
    let cells = Array(this.dimensions);
    for (let i = 0; i < this.dimensions; i++) {
      cells[i] = Array(this.dimensions).fill(0);
    }

    return cells;
  }

  cloneCells() {
    let newCells = [];
    newCells = this.state.cells.map((value, index) => {
      return value.slice();
    });

    return newCells;
  }

  handleCellClick(index) {
    let newCells = this.cloneCells(),
      i = Math.floor(index/this.dimensions),
      j = index - (this.dimensions * i);

    newCells[i][j] = newCells[i][j] ? 0 : 1;

    this.setState({
      cells: newCells
    });
  }

  generateRandomConfig() {
    let cells = this.generateEmptyCells();
    for (let i = 0; i < this.dimensions; i++) {
      for (let j = 0; j < this.dimensions; j++) {
        cells[i][j] = Math.random() < 0.5 ? 0 : 1;
      }
    }

    this.setState({
      cells: cells
    });
  }

  render() {
    return (
      <div className="game">
        <Board dimensions={this.dimensions} cells={this.state.cells}
          handleCellClick={(i) => this.handleCellClick(i) } />
        <Controls
          start={() => this.startSimulation()}
          reset={() => this.resetSimulation()}
          random={() => this.generateRandomConfig()}
        />
      </div>
    );
  }
}

export default Game;
