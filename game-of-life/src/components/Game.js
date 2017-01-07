import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

class Game extends Component {
  constructor() {
    super();
    this.dimensions = 40;
    let cells = this.generateEmptyCells();

    this.state = {
      cells: cells
    };
  }

  startSimulation() {
    this.props.intervalId = setInterval(
      () => {
        this.refreshCellState()
      }, 1000
    );
  }

  resetSimulation() {
    clearInterval(this.props.intervalId);
    let cells = this.generateEmptyCells();
    this.setState({
      cells: cells
    });
  }

  refreshCellState() {
    let newCells = this.cloneCells();

    for (var i = 0; i < this.dimensions; i++) {
      for (var j = 0; j < this.dimensions; j++) {
        // check each cell as per game of life rules.
      }
    }

  }

  generateEmptyCells() {
    let cells = Array(this.dimensions);
    for (var i = 0; i < this.dimensions; i++) {
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

  render() {
    return (
      <div className="game">
        <Board dimensions={this.dimensions} cells={this.state.cells}
          handleCellClick={(i) => this.handleCellClick(i) } />
        <Controls
          start={() => this.startSimulation()}
          reset={() => this.resetSimulation()}
        />
      </div>
    );
  }
}

export default Game;
